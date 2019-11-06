import React, { useEffect, useState } from 'react';
import { Alert, ToastAndroid } from 'react-native';
import api from '~/services/api';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

import { Container, Title, List } from './styles';

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  async function loadAppointments() {
    const response = await api.get('appointments');
    setAppointments(response.data);
  }

  useEffect(() => {
    loadAppointments();
  }, []);

  function handleAlert(id) {
    Alert.alert(
      'Cancelamento!',
      'Deseja cancelar este agendamento?',
      [
        {
          text: 'Sair',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: () => {
            handleCancel(id);
          },
        },
      ],
      {
        cancelable: false,
      }
    );
  }

  async function handleCancel(id) {
    const response = await api.delete(`appointments/${id}`);

    setAppointments(
      appointments.map(appointment =>
        appointment.id === id
          ? {
              ...appointment,
              canceled_at: response.data.canceled_at,
            }
          : appointment
      )
    );

    loadAppointments();
    ToastAndroid.showWithGravity(
      'Agendamento cancelado com sucesso!',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
  }

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Appointment onCancel={() => handleAlert(item.id)} data={item} />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
