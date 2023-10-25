export class Task {
    id: number;
    name: string;
    status: 'pending' | 'complete';
  
    constructor();
    constructor(id?: number, name?: string, status: 'pending' | 'complete' = 'pending') {
      this.id = id || 0;
      this.name = name || '';
      this.status = status;
    }
  }