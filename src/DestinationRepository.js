import Destination from './Destination';

export default class DestinationRepository {
  static destinations = [];
  static getDestinations(){
    if(DestinationRepository.destinations.length > 0){
      return Promise.resolve(DestinationRepository.destinations);
    }
    return fetch('http://localhost:3001/api/v1/destinations')
      .then(response => response.json())
      .then(data => {
        DestinationRepository.destinations = data.map(destination => new Destination(destination));
        return DestininationRepository.destinations;
      });
  }
}