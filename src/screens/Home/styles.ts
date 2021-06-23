import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    width: '100%',
    height: 30,
    marginTop: 198,
    paddingBottom: 45,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    paddingTop: 55,
    paddingHorizontal: 30,
  },
  textInput: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    fontSize: 20,
    textDecorationColor: theme.colors.text,
    backgroundColor: theme.colors.line,
    paddingHorizontal: 11,
    color: theme.colors.text
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: theme.colors.button,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 43
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.text
  },
  line: {
    marginTop: 24,
    width: '100%',
    height: 1,
    backgroundColor: theme.colors.line
  },
  box: {
    marginTop: 24,
    width: '100%',
    height: 230,
    backgroundColor: theme.colors.line,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBox: {
    padding: 20,
    fontSize: 14,
    color: theme.colors.text
  }
})