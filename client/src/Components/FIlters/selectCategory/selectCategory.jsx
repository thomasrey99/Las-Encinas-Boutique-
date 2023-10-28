
import { Select, Space } from 'antd';

const SelectCategory = () => {

    const options = [];
    for (let i = 10; i < 36; i++) {
    options.push({
        label: i.toString(36) + i,
        value: i.toString(36) + i,
    });
    }
    const handleChange = (value) => {
    console.log(`selected ${value}`);
    };
  return (
    <div>
        <Space
        style={{
        width: '50%',
        }}
        direction="vertical"
        >
            <Select
            mode="multiple"
            allowClear
            style={{
                width: '20%',
            }}
            placeholder="categoria"
            defaultValue={['a10', 'c12']}
            onChange={handleChange}
            options={options}
            />
        </Space>
    </div>
  )
}
export default SelectCategory