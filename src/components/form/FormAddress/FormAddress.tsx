import { ChangeEvent, useEffect, useState } from 'react';
import { GetAddressWithZipcode } from '../../../hook/useGetAddressWithZipcode';
import { FormAddressData } from '../../../utils/baseData/FormAddress';
import Button from '../../ui/Button/Button';
import TextField from '../../ui/TextField/TextField';
import * as Styled from './FormAddress.styled';

const FormAddress = () => {
  const [form, setForm] = useState(FormAddressData);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (verifyZipcode()) {
      GetDataAddress();
    } else {
      setDisabled(false);
    }
  }, [form.zipcode]);

  function verifyZipcode(): boolean {
    const clear = form.zipcode.replace(/[^0-9]/g, '');

    if (clear.length === 8) {
      return true;
    }

    return false;
  }

  function handleForm(e: ChangeEvent<HTMLInputElement>): void {
    const { value, id } = e.target;

    setForm({ ...form, [id]: value });
  }

  async function GetDataAddress(): Promise<void> {
    try {
      setDisabled(true);

      const res = await GetAddressWithZipcode(form.zipcode);

      setForm(res);
    } catch (error) {
      console.error(error);

      setDisabled(false);
      setForm(FormAddressData);
    }
  }

  return (
    <Styled.Form>
      <Styled.Wrapped>
        <TextField
          mask="99999-999"
          label="CEP:"
          id="zipcode"
          value={form.zipcode}
          minLength={8}
          maxLength={10}
          onChange={e => handleForm(e)}
        />
      </Styled.Wrapped>
      <Styled.Wrapped>
        <TextField
          label="Logradouro:"
          id="street"
          value={form.street}
          disabled={disabled}
          onChange={e => handleForm(e)}
        />
      </Styled.Wrapped>
      <Styled.Wrapped>
        <TextField
          label="Complemento:"
          disabled={disabled}
          onChange={e => handleForm(e)}
          id="complement"
          value={form.complement}
        />
      </Styled.Wrapped>
      <Styled.Wrapped>
        <TextField
          label="Número:"
          type="number"
          id="number"
          disabled={disabled}
          onChange={e => handleForm(e)}
          flex="2"
          value={form.number}
        />
        <Styled.Divisor />
        <TextField
          label="Bairro:"
          id="district"
          disabled={disabled}
          onChange={e => handleForm(e)}
          flex="2"
          value={form.district}
        />
      </Styled.Wrapped>
      <Styled.Wrapped>
        <TextField
          label="Cidade:"
          id="city"
          disabled={disabled}
          onChange={e => handleForm(e)}
          flex="1"
          value={form.city}
        />
        <Styled.Divisor />
        <TextField
          label="Estado:"
          id="state"
          disabled={disabled}
          onChange={e => handleForm(e)}
          flex="1"
          value={form.state}
        />
      </Styled.Wrapped>
      <Styled.WrappedInvert>
        <Button>Salvar</Button>
      </Styled.WrappedInvert>
    </Styled.Form>
  );
};

export default FormAddress;
