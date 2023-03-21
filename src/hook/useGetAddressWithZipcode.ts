import { FormAddressProps } from '../types/form/FormAddress';
import { FormAddressData } from '../utils/baseData/FormAddress';
import axios, { AxiosError } from 'axios';

export async function GetAddressWithZipcode(
  zipcode: string
): Promise<FormAddressProps> {
  try {
    const clear = zipcode.replace(/[^0-9]/g, '');

    const { data } = await axios.get(`https://viacep.com.br/ws/${clear}/json/`);

    return {
      zipcode,
      number: data?.gia,
      street: data?.logradouro,
      complement: data?.complemento,
      district: data?.bairro,
      city: data?.localidade,
      state: data?.uf,
    };
  } catch (error) {
    const err = error as AxiosError;

    console.error(err);

    return {
      ...FormAddressData,
      zipcode,
    };
  }
}
