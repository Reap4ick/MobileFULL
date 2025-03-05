import React = require('react');
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

export default function App() {
  const startTest = () => {
    let score = 0;
    let i = 0;

    const questions = [
      'Ти, як правило, завжди буваєш всім задоволений?',
      'Тобі іноді заважають заснути різні думки?',
      'Чи було коли-небудь так, що тобі довірили таємницю, а ти з яких-небудь причин не зміг її зберегти?',
      'Чи було коли-небудь так, що тобі стає сумно без особливої причини?',
      'Чи любиш ти жартувати над ким-небудь?',
      'Чи можеш ти сказати про себе, що ти взагалі весела людина?',
      'Чи часто ти потребуєш допомоги інших людей?',
      'Чи часто у тебе міняється настрій?',
      'Якщо ти хочеш познайомитися з іншим хлопчиком або дівчинкою, то ти завжди першим починаєш розмову?',
      'Якщо ти опиняєшся в дурному становищі, то ти потім довго розбудовуєшся?'
    ];

    const askQuestion = () => {
      if (i < questions.length) {
        Alert.alert(
          ':)',
          questions[i],
          [

            { text: 'Так', onPress: () => { score += 1; i++; askQuestion(); } },
            { text: 'Ні', onPress: () => { i++; askQuestion(); } }
          ]
        );
      } else {
        showResult(score);
      }
    };

    askQuestion();
  };

  const showResult = (score: number) => {
    let result = '';
    if (score <= 3) result = 'Флегматик';
    else if (score <= 6) result = 'Сангвінік';
    else result = 'Холерик';

    Alert.alert('Результат', `Ваш темперамент: ${result}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Тест на темперамент за Айзенком</Text>
      <Text style={styles.description}>
        Відповідайте "Так" або "Ні" на запитання, і ми визначимо ваш темперамент.
      </Text>
      <Button title="Почати тест" onPress={startTest} />


    </View>
  );
}


const styles = StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10


  },
  description: {
    textAlign: 'center',
    marginBottom: 20
  }
});
