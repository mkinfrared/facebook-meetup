export interface User {
  id?: string;
  displayName?: string;
  gender?: string;
  ageRange?: {
    min: number;
    max?: number;
  };
  profileUrl?: string;
  username?: string;
  birthday?: string;

  _raw?: string;
  _json?: any;
}
