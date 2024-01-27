import { Button, Menu } from "@arco-design/web-react";
import DropdownComponent from "@arco-design/web-react/es/Dropdown";
import DeleteModal from "../Modals/Delete/DeleteModal";

// importing styles
import "./DropdownActions.css";
import EditModal from "../Modals/Edit/EditModal";

interface DropdownActionsProps {
  actions: any,
  type: string,
  payload: any
}

const DropdownActions = ({ actions, type, payload}: DropdownActionsProps) => {
  const dropList = (
    <Menu>
      <Menu.Item key="Delete">
        <DeleteModal content={actions?.delete} type={type} payload={payload} />
      </Menu.Item>

      {type === "sharedTrips" && (
        <Menu.Item key="Cancel Trip">
          <EditModal content={actions?.cancel} type={type} payload={payload} />
        </Menu.Item>
      )}
    </Menu>
  );

  return (
    <DropdownComponent
      style={{ padding: 0 }}
      droplist={dropList}
      trigger="click"
      position="br"
    >
      <Button type="secondary" style={{padding: '0 10px', height: 25}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
      </svg>
      </Button>
    </DropdownComponent>
  );
};

export default DropdownActions;
