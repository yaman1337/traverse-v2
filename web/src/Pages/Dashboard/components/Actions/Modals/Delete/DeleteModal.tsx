// importing styles
import "./DeleteModal.css";

// arco-design components
import { Modal, Message, Button } from "@arco-design/web-react";

function handleAction(content: any, type: string, payload: any) {
  Modal.confirm({
    title: "Confirm deletion",
    content: content,
    okText: "Delete",
    okButtonProps: {
      status: "danger",
    },
    onOk: async () => {
      try {
        let collectionId: string = "";
        let event;
        if (type === "contribution") {
          collectionId = "places";
          event = new CustomEvent("contributionDeleted", {});
        } else if (type === "reviews") {
          collectionId = "reviews";
          event = new CustomEvent("reviewDeleted", {});
        } else if (type === "sharedTrips") {
          collectionId = "sharedTrips"
          event = new CustomEvent("sharedTripDeleted", {})
        }

        document.dispatchEvent(event);

        Message.success({
          content: `${type} deleted successfully.`,
        });
      } catch (e) {
        Message.error({
          content: "Failed to delete!",
        });
      }
    },
  });
}

interface DeleteModalProps {
  content: any,
  type: string,
  payload: any
}

export default function DeleteModal ({ content, type, payload }: DeleteModalProps) {
  return (
    <Button
      type="secondary"
      onClick={() => handleAction(content, type, payload)}
      style={{
        width: "100%",
        background: "transparent",
        textAlign: "left",
      }}
    >
      Delete
    </Button>
  );
}

