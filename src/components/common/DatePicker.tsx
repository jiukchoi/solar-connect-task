import { DatePicker, Space } from 'antd';

const DatePickerContainer = ({ handleChangeDeadline }) => {
  return (
    <Space direction="vertical">
      <DatePicker style={{width: 130, height: 60}} onChange={handleChangeDeadline} />
    </Space>
  )
}

export default DatePickerContainer;
