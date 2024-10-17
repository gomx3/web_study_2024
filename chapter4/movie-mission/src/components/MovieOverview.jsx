import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";

const MovieOverview = ({ movie }) => {
  const [isOpen, setIsOpen] = useState(false);
  const maxLength = 50; // 원하는 글자수 설정

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

      {/* 모달 */}
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.50)", // 반투명 배경
            display: "flex",
            justifyContent: "center",
            alignItems: "center", // 모달을 화면 중앙에 위치시킴
          },
          content: {
            position: "relative",
            backgroundColor: "transparent", // 모달의 흰색 배경 제거
            border: "none", // 테두리 제거
            padding: 0,
            inset: "auto", // 자동 크기 조정
            width: "auto",
            height: "auto",
            maxWidth: "500px", // 최대 너비 설정
            maxHeight: "90%", // 최대 높이 설정
          },
        }}
        ariaHideApp={false}
      >
        <ModalContent>
          <p>{movie.data?.overview}</p>
          <CloseButton onClick={handleCloseModal}>닫기</CloseButton>
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
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: -10px;

  &:hover {
    color: black;
  }
`;

const ModalContent = styled.div`
  padding: 20px;
  background-color: #121212;
  color: #fff;
`;

const CloseButton = styled.button`
  background-color: #ff007c;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;
