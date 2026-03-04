import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import useAuthStore from '../../store/authStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { generateOTP, storeOTP, verifyOTP } from '../../services/mockData';

export default function ChangePhoneScreen({ navigation }) {
  const { user } = useAuthStore();
  const [step, setStep] = useState(1); // 1: enter phone, 2: verify OTP
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [mockOtp, setMockOtp] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendOTP = () => {
    if (!/^0\d{9}$/.test(phone)) {
      return Alert.alert('Lỗi', 'Số điện thoại không hợp lệ');
    }
    setLoading(true);
    setTimeout(() => {
      const newOtp = generateOTP();
      storeOTP(`phone_${phone}`, newOtp);
      setMockOtp(newOtp);
      setLoading(false);
      setStep(2);
      Alert.alert('OTP đã gửi', `🧪 Mã OTP test: ${newOtp}`);
    }, 500);
  };

  const handleVerify = () => {
    if (otp.length !== 6) return Alert.alert('Lỗi', 'OTP phải có 6 số');
    setLoading(true);
    setTimeout(async () => {
      const valid = verifyOTP(`phone_${phone}`, otp);
      if (!valid) {
        setLoading(false);
        return Alert.alert('Lỗi', 'OTP không hợp lệ');
      }
      const updatedUser = { ...user, phone };
      useAuthStore.setState({ user: updatedUser });
      await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
      setLoading(false);
      Alert.alert('Thành công', 'Đổi số điện thoại thành công');
      navigation.goBack();
    }, 500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.current}>SĐT hiện tại: {user?.phone}</Text>
      {step === 1 ? (
        <>
          <TextInput label="Số điện thoại mới" value={phone} onChangeText={setPhone} mode="outlined" keyboardType="phone-pad" style={styles.input} />
          <Button mode="contained" onPress={handleSendOTP} loading={loading} style={styles.button} buttonColor="#FF6B35">Gửi OTP</Button>
        </>
      ) : (
        <>
          <Text style={styles.otpHint}>🧪 OTP test: {mockOtp}</Text>
          <TextInput label="Nhập mã OTP" value={otp} onChangeText={t => setOtp(t.replace(/[^0-9]/g, '').slice(0, 6))} mode="outlined" keyboardType="number-pad" style={styles.input} />
          <Button mode="contained" onPress={handleVerify} loading={loading} style={styles.button} buttonColor="#FF6B35">Xác nhận</Button>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  current: { fontSize: 14, color: '#666', marginBottom: 16 },
  input: { marginBottom: 12 },
  button: { marginTop: 8, borderRadius: 8 },
  otpHint: { backgroundColor: '#fff3e0', padding: 10, borderRadius: 8, marginBottom: 12, textAlign: 'center', fontWeight: 'bold', color: '#FF6B35' },
});
