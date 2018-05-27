import { Service } from './service.model';
export class ServiceService {

services:Service[] = [
];

getServices(){
  return this.services.slice();
}

addService(service:Service){
  this.services.push(service);
}
}
