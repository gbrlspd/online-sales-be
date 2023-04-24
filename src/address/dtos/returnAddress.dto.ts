import { ReturnCityDto } from 'src/city/dtos/returnCity.dto';
import { AddressEntity } from '../entities/address.entity';

export class ReturnAddressDto {
  complement: string;
  addressNumber: number;
  cep: string;
  city?: ReturnCityDto;

  constructor(addressEntity: AddressEntity) {
    this.complement = addressEntity.complement;
    this.addressNumber = addressEntity.addressNumber;
    this.cep = addressEntity.cep;
    this.city = addressEntity.city
      ? new ReturnCityDto(addressEntity.city)
      : undefined;
  }
}
