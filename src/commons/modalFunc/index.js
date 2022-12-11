import { Modal } from "antd";

export const success = (successmsg) => {
  Modal.success({
    content: successmsg,
  });
};

export const errorMsg = (errormsg) => {
  Modal.error({
    content: errormsg,
  });
};
