import {useAtom} from 'jotai';
import {cartItem} from '../../atom/cart';
import ProductOptions from './ProductOptions.client';
import React from 'react';
import {Modal} from 'antd';

export default function EditModal({
  product,
  index,
  visible,
  onOk,
  confirmLoading,
  onCancel,
}) {
  const [items, setItems] = useAtom(cartItem);
  return (
    <>
      <Modal
        title={'Edit Item'}
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
        confirmLoading={confirmLoading}
      >
        <div></div>
        <ProductOptions product={product} />
      </Modal>
    </>
  );
}
