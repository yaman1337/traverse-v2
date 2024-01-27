import "./EditModal.css";

// arco design components
import { Modal, Message, Button } from "@arco-design/web-react";


function handleAction(content: any, type: string, payload: any) {
  Modal.confirm({
    title: "Confirm",
    content: content,
    okText: "Cancel Trip",
    okButtonProps: {
      status: "danger",
    },
    onOk: async () => {
      try {
        let collectionId = "";
        let event;
        if (type === "contribution") {
          collectionId = "places";
          event = new CustomEvent("contributionEdited", {});
        } else if (type === "reviews") {
          collectionId = "reviews";
          event = new CustomEvent("reviewEdited", {});
        } else if (type === "sharedTrips") {
            collectionId = "sharedTrips"
            event = new CustomEvent("sharedTripCancelled", {})
        }

        // await db.updateDocument(databaseId, collectionId, payload.$id, { status: "cancelled" })

        document.dispatchEvent(event);

        Message.success({
          content:  `Trip cancelled successfully.`,
        });
      } catch (e) {
        Message.error({
          content: "Failed to perform action!",
        });
      }
    },
  });
}

interface EditModalProps {
  content: any,
  type: string,
  payload: any
}

export default function EditModal({ content, type, payload }: EditModalProps) {
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
      Cancel
    </Button>
  );
}

