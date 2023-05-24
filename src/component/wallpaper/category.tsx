
import { Select } from '@arco-design/web-react';
import { Category } from '../../types/category';
import { categoryOptions } from '../wallpaper/const';

interface CategorySelectProps {
    setCategory: (category: Category) => void;
}


const CategorySelect = ({ setCategory }: CategorySelectProps) => {
    const options = categoryOptions.map(({ label, value }) => (
        <Select.Option key={label} value={value}>
            {label}
        </Select.Option>
    ));

    return (
        <Select prefix="类型" placeholder='请选择喜欢的类型' onChange={v => setCategory?.(v)} defaultValue={categoryOptions[0]?.value} style={{ marginBottom: 16 }}>
            {options}
        </Select>
    );
};

export default CategorySelect;