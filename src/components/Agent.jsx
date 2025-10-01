import { useState } from "react";
import styled from "styled-components";


function Agent() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "¡Hola! Soy tu agente. ¿En qué te ayudo?" },
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    // 1. Agregar el mensaje del usuario
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);

    // 2. Limpiar input
    setInput("");

    // 3. Llamar al backend DRF (ajusta la URL de tu API)
    try {
      const res = await fetch("https://tu-backend.onrender.com/api/responder-ia/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();

      // 4. Agregar la respuesta del agente
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error al conectar con el servidor 😢" },
      ]);
    }
  };

  return (
    <ChatContainer>
      <MessagesContainer>
        {messages.map((msg, i) => (
          <Message key={i} role={msg.role}>
            {msg.content}
          </Message>
        ))}
      </MessagesContainer>
      <InputContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe un mensaje..."
        />
        <Button type="submit">Enviar</Button>
      </InputContainer>
    </ChatContainer>
  );
}

export default Agent;

// --- Estilos con styled-components ---
const ChatContainer = styled.div`
  width: 350px;
  height: 500px;
  border: 1px solid #444;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: #0A0A10;
  color: white;
  font-family: sans-serif;
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Message = styled.div`
  padding: 8px 12px;
  border-radius: 12px;
  max-width: 75%;
  align-self: ${({ role }) => (role === "user" ? "flex-end" : "flex-start")};
  background-color: ${({ role }) =>
    role === "user" ? "aquamarine" : "#222"};
  color: ${({ role }) => (role === "user" ? "#0A0A10" : "white")};
`;

const InputContainer = styled.form`
  display: flex;
  padding: 10px;
  border-top: 1px solid #444;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border-radius: 4px;
  border: none;
  outline: none;
`;

const Button = styled.button`
  margin-left: 8px;
  padding: 8px 12px;
  background: aquamarine;
  color: #0A0A10;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #4fd3b2ff;
  }
`;