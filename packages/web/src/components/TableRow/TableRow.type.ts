export interface TableRowProps {
  image: string;
  name: string;
  decision: boolean;
  quantity: string;
  currentUserName: string;
  onClick: (name: string) => void;
}

export interface TableRowState {
  modalOpen: boolean;
}
