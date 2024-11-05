import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";

const MovieOverview = ({ movie }) => {
  const [isOpen, setIsOpen] = useState(false);
  const maxLength = 150; // 원하는 글자수 설정

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Text>
        {movie.data?.overview.length > maxLength
          ? movie.data?.overview.slice(0, maxLength) + "..."
          : movie.data?.overview}
      </Text>
      {movie.data?.overview.length > maxLength && (
        <ReadMoreButton onClick={handleOpenModal}>더보기</ReadMoreButton>
      )}

      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.80)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          content: {
            position: "relative",
            backgroundColor: "transparent",
            border: "none",
            maxWidth: "500px",
          },
        }}
        ariaHideApp={false}
      >
        <ModalContent>
          <p>{movie.data?.overview}</p>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default MovieOverview;

const Text = styled.p`
  font-family: roboto;
  font-size: 16px;
  line-height: 1.5;
  color: #fff;
`;
const ReadMoreButton = styled.button`
  background-color: #ff007c;
  color: white;
  border: none;
  padding: 7px 12px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;
const ModalContent = styled.div`
  padding: 20px;
  background-color: #121212;
  color: #fff;
  border-radius: 13px;
`;