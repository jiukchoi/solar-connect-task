import React, { useState } from "react";
import styled from "styled-components";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Itodo } from "../../TodoService"
import DatePickerContainer from "../../../common/DatePicker";
import ModalContainer from "../../../common/Modal";

const CircleButton = styled.button<{ open: boolean }>`
  background: #33bb77;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  left: 50%;
  transform: translate(50%, 0%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  border-bottom: 1px solid #eeeeee;
`;

const InsertForm = styled.form`
  display: flex;
  background: #eeeeee;
  padding-left: 40px;
  padding-top: 36px;
  padding-right: 60px;
  padding-bottom: 36px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #dddddd;
  width: 100%;
  outline: none;
  font-size: 21px;
  box-sizing: border-box;
  color: #119955;
  &::placeholder {
    color: #dddddd;
    font-size: 16px;
  }
`;

interface TodoCreateProps {
  nextId: number;
  createTodo: (todo: Itodo) => void;
  incrementNextId: () => void;
}

const TodoCreate = ({
  nextId,
  createTodo,
  incrementNextId
}: TodoCreateProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [deadline, setDeadline] = useState("");
  const [isModal, setIsModal] = useState(false);

  const handleToggle = () => setOpen(!open);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
  const handleChangeDeadline = (_: any, dateString: string) => {
    const result = dateString.split('-').splice(1, 2).join(".");
    setDeadline(result);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 새로고침 방지
    // if (e.target === "") {
    //   setIsModal(prev => !prev)
    //   return;
    // }
    if (value === "") {
      setIsModal(prev => !prev);
      return;
    }

    createTodo({
      id: nextId,
      text: value,
      done: false,
      deadline,
    });
    incrementNextId(); // nextId 하나 증가

    setValue(""); // input 초기화
    setDeadline("");
    setOpen(false); // open 닫기
  };

  return (
    <>
      {isModal && <ModalContainer isModal={isModal} setIsModal={setIsModal} />}
      <InsertFormPositioner>
        <InsertForm onSubmit={handleSubmit}>
          <Input
            autoFocus
            placeholder="What's need to be done?"
            onChange={handleChange}
            value={value}
          />
          <DatePickerContainer handleChangeDeadline={handleChangeDeadline} />
          <CircleButton onClick={handleToggle} open={open}>
            <PlusCircleOutlined />
          </CircleButton>
        </InsertForm>
      </InsertFormPositioner>
    </>
  );
};

export default React.memo(TodoCreate);
