import time

#tạo hàm thuật toán
def thuat_toan():
  for i in range(1,11):
        print(i)
def countdown(t):
    while t:
        mins, secs = divmod(t, 60) #tách phút và giây từ t
        timeformat = '{:02d}:{:02d}'.format(mins, secs)#định dạng thời gian hiển thị đếm ngược
        print(timeformat, end='\r')#hiển thị thời gian đếm ngược
        time.sleep(1)# chờ 1s và update thời gian
        t -= 1 #đếm ngược từng giây cho tới 0
    print('Goodbye!\n\n\n\n\n')


t=int(input("Nhap so giay bat dau dem nguoc : "))
countdown(t)
thuat_toan()