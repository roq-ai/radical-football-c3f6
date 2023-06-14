import { AcademyInterface } from 'interfaces/academy';
import { GetQueryInterface } from 'interfaces';

export interface EventInterface {
  id?: string;
  academy_id: string;
  name: string;
  date: any;
  location: string;
  type: string;
  created_at?: any;
  updated_at?: any;

  academy?: AcademyInterface;
  _count?: {};
}

export interface EventGetQueryInterface extends GetQueryInterface {
  id?: string;
  academy_id?: string;
  name?: string;
  location?: string;
  type?: string;
}
