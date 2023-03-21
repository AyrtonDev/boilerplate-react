import { useState } from 'react';
import { FormAddressData } from '../../../utils/baseData/FormAddress';
import Button from '../../ui/Button/Button';
import TextField from '../../ui/TextField/TextField';
import * as Styled from './FormAddress.styled';

const FormAddress = () => {
  const [form, setForm] = useState(FormAddressData);
  return (
    <Styled.Form>
      <Styled.Wrapped>
        <TextField label="Logradouro:" id="street" flex={3} />
        <Styled.Divisor />
        <TextField label="Número:" type="number" id="number" flex={2} />
      </Styled.Wrapped>
      <Styled.Wrapped>
        <TextField label="Complemento:" id="complement" />
      </Styled.Wrapped>
      <Styled.Wrapped>
        <TextField label="CEP:" id="zipCode" flex={2} />
        <Styled.Divisor />
        <TextField label="Bairro:" id="district" flex={3} />
      </Styled.Wrapped>
      <Styled.Wrapped>
        <TextField label="Cidade:" id="city" flex={1} />
        <Styled.Divisor />
        <TextField label="Estado:" id="state" flex={1} />
      </Styled.Wrapped>
      <Styled.WrappedInvert>
        <Button>Salvar</Button>
      </Styled.WrappedInvert>
    </Styled.Form>
  );
};

export default FormAddress;
