import { PlayerInterface } from 'interfaces/player';
import { GetQueryInterface } from 'interfaces';

export interface PerformanceInterface {
  id?: string;
  player_id: string;
  date: any;
  score: number;
  notes?: string;
  created_at?: any;
  updated_at?: any;

  player?: PlayerInterface;
  _count?: {};
}

export interface PerformanceGetQueryInterface extends GetQueryInterface {
  id?: string;
  player_id?: string;
  notes?: string;
}
