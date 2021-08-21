import { Modal } from 'antd';

const ModalContainer = ({ isModal, setIsModal }) => {
  const handleOk = () => {
    setIsModal(false);
  };

  const handleCancel = () => {
    setIsModal(false);
  };

  return (
    <>
      <Modal title="입력 오류" visible={isModal} onOk={handleOk} onCancel={handleCancel}>
        <p>빈칸을 채워주세요.</p>
      </Modal>
    </>
  );
};

export default ModalContainer;
