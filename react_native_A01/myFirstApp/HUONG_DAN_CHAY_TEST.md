# 🍔 FoodApp - Hướng dẫn chạy và test

## Thông tin dự án
- **Sinh viên:** Hoang Ba Hieu - 20110477
- **Đề tài:** Ứng dụng giao đồ ăn (User side) - React Native / Expo
- **SDK:** Expo SDK 54, React 19, React Native 0.81

---

## 1. Cài đặt môi trường

### Yêu cầu hệ thống
- **Node.js** >= 18
- **npm** hoặc **yarn**
- **Expo Go** app trên điện thoại (iOS/Android) hoặc Android Emulator / iOS Simulator

### Cài đặt

```bash
cd react_native_A01/myFirstApp
npm install
```

---

## 2. Chạy ứng dụng

```bash
npx expo start
```

Sau khi chạy:
- **Điện thoại thật:** Quét mã QR bằng app Expo Go
- **Android Emulator:** Nhấn `a`
- **iOS Simulator:** Nhấn `i`
- **Web:** Nhấn `w`

---

## 3. Tài khoản test

| Email | Password |
|-------|----------|
| hieu@test.com | 123456 |

Hoặc tạo tài khoản mới qua màn hình Đăng ký.

---

## 4. Hướng dẫn test từng bài tập

### Bài A02: Đăng ký, Đăng nhập, Quên mật khẩu
**Branch:** `A02-auth`

| Chức năng | Cách test |
|-----------|-----------|
| **Đăng ký** | Bấm "Tạo tài khoản mới" → Điền form → Nhận mã OTP (hiển thị trên màn hình) → Nhập OTP → Đăng ký thành công |
| **Đăng nhập** | Dùng tài khoản test (hieu@test.com / 123456) → Đăng nhập → Vào trang chủ |
| **Quên MK** | Bấm "Quên mật khẩu?" → Nhập email → Nhận OTP → Nhập OTP + mật khẩu mới → Đổi thành công |
| **JWT** | Token mock được lưu vào AsyncStorage, tự động đăng nhập lại khi mở app |

> 🧪 **Lưu ý:** OTP được hiển thị trực tiếp trên UI (mock) để tiện test. Khi có API thật, OTP sẽ gửi qua email/SMS.

---

### Bài A03: Trang chủ
**Branch:** `A03-home`

| Chức năng | Cách test |
|-----------|-----------|
| **Giao diện** | Đăng nhập → Xem trang chủ với banner khuyến mãi, danh mục, sản phẩm bán chạy, giảm giá |
| **React Navigation** | Bottom Tab: Trang chủ, Tìm kiếm, Giỏ hàng, Đơn hàng, Tài khoản |
| **AsyncStorage** | Đăng nhập → Tắt app → Mở lại → Vẫn giữ trạng thái đăng nhập, hiển thị tên user |
| **UI đẹp** | Sử dụng react-native-paper cho tất cả components |

---

### Bài A04: Profile, Tìm kiếm, Chi tiết
**Branch:** `A04-profile-search-detail`

| Chức năng | Cách test |
|-----------|-----------|
| **Edit Profile** | Tab Tài khoản → Chỉnh sửa hồ sơ → Đổi avatar (chọn ảnh), đổi tên → Lưu |
| **Đổi mật khẩu** | Tài khoản → Đổi mật khẩu → Nhập MK cũ + MK mới |
| **Đổi SĐT** | Tài khoản → Đổi SĐT → Nhập SĐT mới → Nhận OTP → Xác nhận |
| **Đổi Email** | Tài khoản → Đổi email → Nhập email mới → Nhận OTP → Xác nhận |
| **Tìm kiếm** | Tab Tìm kiếm → Nhập tên món/quán → Kết quả realtime |
| **Lọc** | Chọn danh mục + sắp xếp (giá tăng/giảm, bán chạy, giảm giá) |
| **Lịch sử TK** | Tìm kiếm → Xem lịch sử tìm kiếm đã lưu |
| **Chi tiết SP** | Bấm vào bất kỳ sản phẩm → Xem mô tả, giá, rating, shop |

---

### Bài A05: Trang chủ nâng cao
**Branch:** `A05-enhanced-home`

| Chức năng | Cách test |
|-----------|-----------|
| **Danh mục ngang** | Trang chủ → Slide danh mục theo chiều ngang (10 danh mục) |
| **Top 10 bán chạy** | Trang chủ → Section "Top 10 bán chạy nhất" → Slide ngang |
| **20 SP giảm giá** | Trang chủ → Section "Giảm giá sốc" → Hiển thị 2 cột, sắp xếp giảm giá cao→thấp |

---

### Bài A06: Giỏ hàng, Thanh toán, Đơn hàng
**Branch:** `A06-cart-checkout-orders`

| Chức năng | Cách test |
|-----------|-----------|
| **Zustand** | State management cho Auth, Cart, Orders - tất cả dùng Zustand |
| **Thêm giỏ hàng** | Chi tiết SP → "Thêm vào giỏ" hoặc "Mua ngay" |
| **Giỏ hàng** | Tab Giỏ hàng → Tăng/giảm số lượng, xóa món |
| **Cart Badge** | Icon giỏ hàng hiển thị số lượng sản phẩm |
| **Thanh toán** | Giỏ hàng → Thanh toán → Nhập địa chỉ, SĐT → Chọn COD/MoMo/Bank → Đặt hàng |
| **Theo dõi đơn** | Tab Đơn hàng → Xem danh sách → Bấm vào xem chi tiết |
| **6 trạng thái** | 1.Mới → 2.Xác nhận → 3.Chuẩn bị → 4.Giao hàng → 5.Đã giao → 6.Hủy |
| **Test trạng thái** | Chi tiết đơn → Bấm "🧪 Chuyển trạng thái tiếp" để test |
| **Hủy đơn (<30p)** | Đặt đơn → Hủy ngay → Hủy thành công |
| **Yêu cầu hủy** | Khi đơn ở trạng thái "Đang chuẩn bị" → Gửi yêu cầu hủy cho shop |
| **Lazy loading** | Bấm vào danh mục → Kéo xuống cuối → Load thêm sản phẩm |

---

## 5. Cấu trúc thư mục

```
myFirstApp/
├── App.js                          # Entry point
├── .env                            # API config (thêm sau)
├── babel.config.js                 # Babel + Reanimated plugin
├── src/
│   ├── config/
│   │   └── api.js                  # API endpoints config
│   ├── navigation/
│   │   ├── AppNavigator.js         # Root navigator (Auth/Main switch)
│   │   ├── AuthNavigator.js        # Auth stack (Login/Register/OTP/Forgot)
│   │   └── MainTabNavigator.js     # Bottom tab navigator (5 tabs)
│   ├── screens/
│   │   ├── auth/                   # Login, Register, OTP, ForgotPassword
│   │   ├── home/                   # HomeScreen, CategoryProductsScreen
│   │   ├── search/                 # SearchScreen
│   │   ├── product/                # ProductDetailScreen
│   │   ├── profile/                # Profile, EditProfile, ChangePassword/Phone/Email
│   │   ├── cart/                   # CartScreen, CheckoutScreen
│   │   └── orders/                 # OrdersScreen, OrderDetailScreen
│   ├── services/
│   │   ├── authService.js          # Auth API (mock)
│   │   └── mockData.js             # Mock data + OTP logic
│   └── store/
│       ├── authStore.js            # Zustand - Auth state
│       ├── cartStore.js            # Zustand - Cart state
│       └── orderStore.js           # Zustand - Order state
```

---

## 6. Tech Stack

| Thành phần | Thư viện |
|-----------|----------|
| Framework | Expo SDK 54 |
| Navigation | React Navigation (Stack + Bottom Tab) |
| UI | react-native-paper |
| State Management | Zustand |
| Local Storage | AsyncStorage |
| Images | expo-image-picker |
| HTTP Client | axios (sẵn sàng khi có API) |
| Icons | @expo/vector-icons (MaterialCommunityIcons) |

---

## 7. Kết nối API thật (sau này)

Khi có backend API:
1. Sửa file `.env`:
   ```
   API_BASE_URL=http://your-api-server.com/api
   ```
2. Thay mock functions trong `services/authService.js` bằng axios calls
3. Endpoint config đã sẵn trong `config/api.js`

---

## 8. Git Branches

| Branch | Nội dung |
|--------|----------|
| `main` | Code hoàn chỉnh (merged tất cả) |
| `A02-auth` | Đăng ký, đăng nhập, quên mật khẩu |
| `A03-home` | Trang chủ + Navigation + AsyncStorage |
| `A04-profile-search-detail` | Profile, tìm kiếm, chi tiết SP |
| `A05-enhanced-home` | Trang chủ nâng cao (categories, top10, discounted) |
| `A06-cart-checkout-orders` | Giỏ hàng, thanh toán, đơn hàng |
