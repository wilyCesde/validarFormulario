import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Controller, useForm } from "react-hook-form";

export default function App() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      phone: '',
      password: '',
      age: ''
    }
  });

  const onsubmit = (dataform) => {
    console.log(dataform)
    const { fullname, email } = dataform;
    console.log(fullname)
  }

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 30,
          minLength: 2,
          pattern: /[A-Za-zÑñÀÈÌÒÙàèìòù ]+$/g
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Nombre Completo"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="fullname"
      />
      {errors.fullname?.type == 'required' && <Text style={{ color: 'red' }}>El nombre completo es obligatorio</Text>}
      {errors.fullname?.type == 'maxLength' && <Text style={{ color: 'red' }}>El nombre completo tiene un máximo de 30 chars</Text>}
      {errors.fullname?.type == 'minLength' && <Text style={{ color: 'red' }}>El nombre completo tiene un mínimo de 2 chars</Text>}
      {errors.fullname?.type == 'pattern' && <Text style={{ color: 'red' }}>el nombre debe tener letras y espacios</Text>}
      
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 50,
          minLength: 2,
          pattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="email"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email?.type == 'required' && <Text style={{ color: 'red' }}>El email  es obligatorio</Text>}
      {errors.email?.type == 'maxLength' && <Text style={{ color: 'red' }}>El email  tiene un máximo de 50 chars</Text>}
      {errors.email?.type == 'minLength' && <Text style={{ color: 'red' }}>El email  tiene un mínimo de 2 chars</Text>}
      {errors.email?.type == 'pattern' && <Text style={{ color: 'red' }}>el email no es correcto</Text>}
     
      <Button icon='send' mode='contained' onPress={handleSubmit(onsubmit)}>
        Enviar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

