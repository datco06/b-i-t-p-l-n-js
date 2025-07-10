// Đảm bảo mã JavaScript chỉ chạy sau khi toàn bộ trang đã được tải
document.addEventListener("DOMContentLoaded", () => {
  // Lấy các phần tử cần thiết từ trang HTML
  const tourForm = document.querySelector(".ai-tour-form");
  const resultsContainer = document.querySelector(".ai-tour-results");

  // Dữ liệu từ file taotour.json được nhúng trực tiếp vào đây
  const allToursData = {
    da_lat: {
      ten_tinh: "Đà Lạt (Lâm Đồng)",
      danh_sach_tour: [
        {
          id_tour: "DL_3N2D",
          ten_tour: "Đà Lạt Tình Yêu - Gói Tiết Kiệm",
          thoi_gian: "3 Ngày 2 Đêm",
          diem_don: [
            "Sân bay Liên Khương",
            "Bến xe liên tỉnh Đà Lạt",
            "Khách sạn trung tâm",
          ],
          mo_ta_ngan:
            "Không khí trong lành, cảnh quan hùng vĩ và những trải nghiệm cốt lõi tại thành phố ngàn hoa trong 3 ngày.",
          hinh_anh_dai_dien: "/anh/image copy 35.png",
          gia_tour: {
            gia_co_ban_nguoi_lon: 2800000,
            gia_tre_em: 1400000,
            ghi_chu_gia: "Giá chưa bao gồm vé máy bay/xe khách đến Đà Lạt.",
          },
          phuong_tien_noi_dia: "Ô tô 7-16 chỗ",
          lich_trinh_chi_tiet: [
            {
              ngay: 1,
              tieu_de: "Khám Phá Trung Tâm Thành Phố",
              hoat_dong: [
                {
                  gio: "Trưa",
                  mo_ta:
                    "Xe đón quý khách tại điểm hẹn, đưa về khách sạn nhận phòng.",
                },
                { gio: "12:30", mo_ta: "Ăn trưa." },
                {
                  gio: "14:00",
                  mo_ta: "Tham quan Ga xe lửa Đà Lạt và Quảng trường Lâm Viên.",
                },
                { gio: "18:30", mo_ta: "Ăn tối. Tự do dạo Chợ đêm Đà Lạt." },
              ],
            },
            {
              ngay: 2,
              tieu_de: "Check-in Các Điểm Hot Ngoại Ô",
              hoat_dong: [
                {
                  gio: "08:00",
                  mo_ta:
                    "Ăn sáng. Tham quan Fresh Garden và trải nghiệm máng trượt tại thác Datanla.",
                },
                { gio: "12:30", mo_ta: "Ăn trưa." },
                {
                  gio: "14:00",
                  mo_ta: "Tham quan Đường hầm Đất sét và Thiền viện Trúc Lâm.",
                },
                { gio: "18:30", mo_ta: "Ăn tối, tự do." },
              ],
            },
            {
              ngay: 3,
              tieu_de: "Săn Mây Và Tạm Biệt",
              hoat_dong: [
                {
                  gio: "04:30",
                  mo_ta: "Xe đưa đoàn đi 'săn mây' tại đồi chè Cầu Đất.",
                },
                {
                  gio: "09:00",
                  mo_ta: "Về lại khách sạn, chuẩn bị hành lý.",
                },
                { gio: "11:00", mo_ta: "Làm thủ tục trả phòng, ăn trưa." },
                {
                  gio: "Chiều",
                  mo_ta: "Xe đưa ra sân bay/bến xe. Kết thúc tour.",
                },
              ],
            },
          ],
          bao_gom: [
            "Khách sạn 2-3 sao",
            "Các bữa ăn trong chương trình",
            "Xe đưa đón",
            "Vé tham quan cơ bản",
          ],
          khong_bao_gom: [
            "Vé di chuyển đến Đà Lạt",
            "Vé trò chơi tự túc",
            "Chi phí cá nhân",
          ],
        },
        {
          id_tour: "DL_4N3D",
          ten_tour: "Đà Lạt Mộng Mơ - Gói Trọn Vẹn",
          thoi_gian: "4 Ngày 3 Đêm",
          diem_don: [
            "Sân bay Liên Khương",
            "Bến xe liên tỉnh Đà Lạt",
            "Khách sạn trung tâm",
          ],
          mo_ta_ngan:
            "Khám phá trọn vẹn vẻ đẹp Đà Lạt từ nội ô đến ngoại thành, chinh phục đỉnh Langbiang và tận hưởng không khí cao nguyên.",
          hinh_anh_dai_dien: "/anh/DaLat_4N3D.png",
          gia_tour: {
            gia_co_ban_nguoi_lon: 3950000,
            gia_tre_em: 2000000,
            ghi_chu_gia: "Giá chưa bao gồm vé máy bay/xe khách đến Đà Lạt.",
          },
          phuong_tien_noi_dia: "Ô tô 7-16 chỗ, xe jeep",
          lich_trinh_chi_tiet: [
            {
              ngay: 1,
              tieu_de: "Khám Phá Trung Tâm Thành Phố",
              hoat_dong: [
                {
                  gio: "Trưa",
                  mo_ta:
                    "Xe đón quý khách tại điểm hẹn, đưa về khách sạn nhận phòng.",
                },
                { gio: "12:30", mo_ta: "Ăn trưa." },
                {
                  gio: "14:00",
                  mo_ta: "Tham quan Ga xe lửa Đà Lạt và Quảng trường Lâm Viên.",
                },
                { gio: "18:30", mo_ta: "Ăn tối. Tự do dạo Chợ đêm Đà Lạt." },
              ],
            },
            {
              ngay: 2,
              tieu_de: "Check-in Các Điểm Hot Ngoại Ô",
              hoat_dong: [
                {
                  gio: "08:00",
                  mo_ta:
                    "Ăn sáng. Tham quan Fresh Garden và trải nghiệm máng trượt tại thác Datanla.",
                },
                { gio: "12:30", mo_ta: "Ăn trưa." },
                {
                  gio: "14:00",
                  mo_ta: "Tham quan Đường hầm Đất sét và Thiền viện Trúc Lâm.",
                },
                { gio: "18:30", mo_ta: "Ăn tối, tự do." },
              ],
            },
            {
              ngay: 3,
              tieu_de: "Chinh Phục Đỉnh Langbiang",
              hoat_dong: [
                {
                  gio: "08:00",
                  mo_ta: "Ăn sáng. Khởi hành đến khu du lịch Langbiang.",
                },
                {
                  gio: "09:00",
                  mo_ta:
                    "Di chuyển bằng xe jeep lên đỉnh Radar, ngắm toàn cảnh Suối Vàng, Suối Bạc.",
                },
                {
                  gio: "12:30",
                  mo_ta: "Ăn trưa tại nhà hàng dưới chân núi.",
                },
                {
                  gio: "14:30",
                  mo_ta:
                    "Tham quan Thung lũng Tình Yêu hoặc Vườn Ánh Sáng Lumiere.",
                },
                {
                  gio: "18:30",
                  mo_ta:
                    "Ăn tối. Tham gia đêm lửa trại, giao lưu cồng chiêng với người dân tộc Lạch (tùy chọn).",
                },
              ],
            },
            {
              ngay: 4,
              tieu_de: "Mua Sắm Và Tạm Biệt",
              hoat_dong: [
                {
                  gio: "08:00",
                  mo_ta: "Ăn sáng. Tự do mua sắm đặc sản tại chợ Đà Lạt.",
                },
                { gio: "11:00", mo_ta: "Làm thủ tục trả phòng." },
                { gio: "12:00", mo_ta: "Ăn trưa." },
                {
                  gio: "Chiều",
                  mo_ta: "Xe đưa ra sân bay/bến xe. Kết thúc tour.",
                },
              ],
            },
          ],
          bao_gom: [
            "Khách sạn 3 sao",
            "Các bữa ăn trong chương trình",
            "Xe đưa đón, xe jeep lên Langbiang",
            "Vé tham quan cơ bản",
          ],
          khong_bao_gom: [
            "Vé di chuyển đến Đà Lạt",
            "Vé trò chơi tự túc, vé giao lưu cồng chiêng",
            "Chi phí cá nhân",
          ],
        },
      ],
    },
    ho_chi_minh: {
      ten_tinh: "TP. Hồ Chí Minh",
      danh_sach_tour: [
        {
          id_tour: "HCM_2N1D",
          ten_tour: "Sài Gòn Năng Động & Địa Đạo Củ Chi",
          thoi_gian: "2 Ngày 1 Đêm",
          diem_don: ["Sân bay Tân Sơn Nhất", "Khách sạn trung tâm TP.HCM"],
          mo_ta_ngan:
            "Khám phá những góc cạnh tương phản của Sài Gòn, từ trung tâm hoa lệ đến quá khứ hào hùng tại Địa đạo Củ Chi.",
          hinh_anh_dai_dien: "/anh/hcm_cuchi.png",
          gia_tour: {
            gia_co_ban_nguoi_lon: 2500000,
            gia_tre_em: 1300000,
            ghi_chu_gia: "Áp dụng cho nhóm từ 2 khách trở lên.",
          },
          phuong_tien_noi_dia: "Ô tô du lịch",
          lich_trinh_chi_tiet: [
            {
              ngay: 1,
              tieu_de: "City Tour - Dấu Ấn Hòn Ngọc Viễn Đông",
              hoat_dong: [
                {
                  gio: "Sáng/Trưa",
                  mo_ta:
                    "Đón khách tại điểm hẹn, nhận phòng khách sạn. Ăn trưa.",
                },
                {
                  gio: "14:00",
                  mo_ta:
                    "Tham quan Dinh Độc Lập, Nhà thờ Đức Bà, Bưu điện Trung tâm Sài Gòn.",
                },
                {
                  gio: "16:30",
                  mo_ta: "Tham quan Bảo tàng Chứng tích Chiến tranh.",
                },
                {
                  gio: "18:30",
                  mo_ta: "Ăn tối. Tự do khám phá phố đi bộ Nguyễn Huệ.",
                },
              ],
            },
            {
              ngay: 2,
              tieu_de: "Địa Đạo Củ Chi & Tạm Biệt",
              hoat_dong: [
                { gio: "08:00", mo_ta: "Ăn sáng, khởi hành đi Củ Chi." },
                {
                  gio: "09:30",
                  mo_ta:
                    "Khám phá Địa đạo Củ Chi: xem phim tài liệu, chui hầm, tìm hiểu hệ thống địa đạo.",
                },
                { gio: "12:00", mo_ta: "Ăn trưa tại Củ Chi." },
                {
                  gio: "14:00",
                  mo_ta:
                    "Xe đưa về lại TP.HCM, trả khách tại điểm hẹn ban đầu. Kết thúc tour.",
                },
              ],
            },
          ],
          bao_gom: [
            "Khách sạn 3 sao",
            "Các bữa ăn trong chương trình",
            "Xe đưa đón",
            "Vé tham quan",
          ],
          khong_bao_gom: ["Vé máy bay/tàu/xe đến TP.HCM", "Chi phí cá nhân"],
        },
        {
          id_tour: "HCM_3N2D",
          ten_tour: "Sài Gòn & Miền Tây Sông Nước",
          thoi_gian: "3 Ngày 2 Đêm",
          diem_don: ["Sân bay Tân Sơn Nhất", "Khách sạn trung tâm TP.HCM"],
          mo_ta_ngan:
            "Hành trình kết hợp giữa Sài Gòn sôi động và trải nghiệm miệt vườn sông nước đậm chất văn hóa miền Tây.",
          hinh_anh_dai_dien: "/anh/hcm_mientay.png",
          gia_tour: {
            gia_co_ban_nguoi_lon: 3800000,
            gia_tre_em: 2000000,
            ghi_chu_gia:
              "Tour miền Tây có thể thay đổi tùy tình hình thời tiết.",
          },
          phuong_tien_noi_dia: "Ô tô du lịch, thuyền",
          lich_trinh_chi_tiet: [
            {
              ngay: 1,
              tieu_de: "City Tour - Dấu Ấn Hòn Ngọc Viễn Đông",
              hoat_dong: [
                {
                  gio: "Sáng/Trưa",
                  mo_ta:
                    "Đón khách tại điểm hẹn, nhận phòng khách sạn. Ăn trưa.",
                },
                {
                  gio: "14:00",
                  mo_ta:
                    "Tham quan Dinh Độc Lập, Nhà thờ Đức Bà, Bưu điện Trung tâm Sài Gòn.",
                },
                {
                  gio: "18:30",
                  mo_ta: "Ăn tối. Tự do khám phá phố đi bộ Nguyễn Huệ.",
                },
              ],
            },
            {
              ngay: 2,
              tieu_de: "Về Miền Tây (Mỹ Tho - Bến Tre)",
              hoat_dong: [
                { gio: "07:30", mo_ta: "Ăn sáng. Khởi hành đi Mỹ Tho." },
                {
                  gio: "09:30",
                  mo_ta:
                    "Du thuyền trên sông Tiền, ngắm cảnh 4 cù lao Long, Lân, Quy, Phụng. Tham quan Cồn Thới Sơn.",
                },
                {
                  gio: "11:00",
                  mo_ta:
                    "Đi xuồng ba lá len lỏi rạch dừa nước, tham quan lò kẹo dừa, thưởng thức trái cây và nghe đờn ca tài tử.",
                },
                { gio: "12:30", mo_ta: "Ăn trưa với đặc sản miền Tây." },
                { gio: "15:00", mo_ta: "Trở lại bến tàu, xe đưa về TP.HCM." },
                { gio: "19:00", mo_ta: "Ăn tối." },
              ],
            },
            {
              ngay: 3,
              tieu_de: "Tự Do Mua Sắm & Tạm Biệt",
              hoat_dong: [
                {
                  gio: "Sáng",
                  mo_ta: "Ăn sáng. Tự do mua sắm tại chợ Bến Thành.",
                },
                { gio: "11:00", mo_ta: "Trả phòng khách sạn." },
                {
                  gio: "Trưa",
                  mo_ta:
                    "Xe đưa ra sân bay hoặc điểm hẹn ban đầu. Kết thúc tour.",
                },
              ],
            },
          ],
          bao_gom: [
            "Khách sạn 3 sao",
            "Các bữa ăn",
            "Xe đưa đón",
            "Thuyền tham quan",
            "Vé vào cổng",
          ],
          khong_bao_gom: ["Vé máy bay/tàu/xe đến TP.HCM", "Chi phí cá nhân"],
        },
      ],
    },
    phu_quoc: {
      ten_tinh: "Phú Quốc (Kiên Giang)",
      danh_sach_tour: [
        {
          id_tour: "PQ_3N2D",
          ten_tour: "Biển Ngọc Phú Quốc - Tour Khám Phá Nam Đảo",
          thoi_gian: "3 Ngày 2 Đêm",
          diem_don: ["Sân bay Phú Quốc", "Bến tàu cao tốc"],
          mo_ta_ngan:
            "Hành trình 3 ngày tập trung khám phá vẻ đẹp hoang sơ của các hòn đảo phía Nam và các điểm check-in nổi tiếng.",
          hinh_anh_dai_dien: "/anh/phuquoc_namdao.png",
          gia_tour: {
            gia_co_ban_nguoi_lon: 3500000,
            gia_tre_em: 1800000,
            ghi_chu_gia: "Giá chưa bao gồm vé máy bay/tàu cao tốc.",
          },
          phuong_tien_noi_dia: "Ô tô, Cano",
          lich_trinh_chi_tiet: [
            {
              ngay: 1,
              tieu_de: "Chào Phú Quốc - Khám Phá Đông Đảo",
              hoat_dong: [
                {
                  gio: "Trưa",
                  mo_ta:
                    "Đón khách tại sân bay/bến tàu, về khách sạn nhận phòng, ăn trưa.",
                },
                {
                  gio: "14:30",
                  mo_ta:
                    "Tham quan làng chài Hàm Ninh, vườn tiêu, nhà thùng nước mắm.",
                },
                {
                  gio: "18:00",
                  mo_ta: "Ăn tối. Tự do khám phá Chợ đêm Dinh Cậu.",
                },
              ],
            },
            {
              ngay: 2,
              tieu_de: "Tour 4 Đảo - Lặn Ngắm San Hô",
              hoat_dong: [
                {
                  gio: "08:30",
                  mo_ta:
                    "Xe đưa đến cảng An Thới, lên cano khám phá Hòn Móng Tay, Hòn Gầm Ghì (lặn san hô), Hòn Mây Rút.",
                },
                { gio: "12:00", mo_ta: "Ăn trưa trên đảo." },
                {
                  gio: "15:30",
                  mo_ta: "Cano về cảng, xe đưa đi tham quan Nhà tù Phú Quốc.",
                },
                {
                  gio: "17:00",
                  mo_ta:
                    "Check-in Thị trấn Hoàng Hôn (Sunset Town), ngắm Cầu Hôn.",
                },
                { gio: "19:00", mo_ta: "Ăn tối." },
              ],
            },
            {
              ngay: 3,
              tieu_de: "Tắm Biển - Tạm Biệt",
              hoat_dong: [
                {
                  gio: "Sáng",
                  mo_ta: "Ăn sáng. Tự do tắm biển tại Bãi Sao.",
                },
                { gio: "11:00", mo_ta: "Trả phòng, xe đưa đi ăn trưa." },
                {
                  gio: "Chiều",
                  mo_ta: "Đưa khách ra sân bay/bến tàu. Kết thúc tour.",
                },
              ],
            },
          ],
          bao_gom: [
            "Khách sạn 3 sao",
            "Các bữa ăn",
            "Xe đưa đón",
            "Cano tour 4 đảo",
            "Vé tham quan",
          ],
          khong_bao_gom: [
            "Vé máy bay/tàu cao tốc",
            "Chi phí cá nhân",
            "Vé xem show Kiss The Stars",
          ],
        },
        {
          id_tour: "PQ_4N3D",
          ten_tour: "Phú Quốc Trọn Vẹn - Nam Bắc Đảo Du Hí",
          thoi_gian: "4 Ngày 3 Đêm",
          diem_don: ["Sân bay Phú Quốc", "Bến tàu cao tốc"],
          mo_ta_ngan:
            "Trải nghiệm đầy đủ từ Nam tới Bắc đảo, từ lặn biển, khám phá đảo hoang đến vui chơi bất tận tại các công viên chủ đề.",
          hinh_anh_dai_dien: "/anh/phuquoc_tronven.png",
          gia_tour: {
            gia_co_ban_nguoi_lon: 4800000,
            gia_tre_em: 2500000,
            ghi_chu_gia:
              "Giá chưa bao gồm vé máy bay/tàu và vé VinWonders/Safari.",
          },
          phuong_tien_noi_dia: "Ô tô, Cano",
          lich_trinh_chi_tiet: [
            {
              ngay: 1,
              tieu_de: "Chào Phú Quốc - Khám Phá Đông Đảo",
              hoat_dong: [],
            },
            {
              ngay: 2,
              tieu_de: "Tour 4 Đảo - Lặn Ngắm San Hô",
              hoat_dong: [],
            },
            {
              ngay: 3,
              tieu_de: "Vui Chơi Grand World - VinWonders/Safari",
              hoat_dong: [
                {
                  gio: "08:30",
                  mo_ta:
                    "Khởi hành đi Bắc Đảo. Tham quan thành phố không ngủ Grand World.",
                },
                { gio: "12:00", mo_ta: "Ăn trưa tự túc tại Grand World." },
                {
                  gio: "13:30",
                  mo_ta:
                    "Lựa chọn: Vui chơi tại VinWonders hoặc khám phá Vinpearl Safari (vé tự túc).",
                },
                {
                  gio: "19:00",
                  mo_ta: "Ăn tối và thưởng thức show diễn nhạc nước.",
                },
              ],
            },
            {
              ngay: 4,
              tieu_de: "Tự Do Mua Sắm - Tạm Biệt",
              hoat_dong: [
                {
                  gio: "Sáng",
                  mo_ta: "Ăn sáng. Mua sắm đặc sản tại chợ Dương Đông.",
                },
                { gio: "11:00", mo_ta: "Trả phòng, ăn trưa." },
                {
                  gio: "Chiều",
                  mo_ta: "Đưa khách ra sân bay/bến tàu. Kết thúc tour.",
                },
              ],
            },
          ],
          bao_gom: [
            "Khách sạn 3 sao",
            "Các bữa ăn theo chương trình",
            "Xe đưa đón",
            "Cano tour 4 đảo",
            "Vé tham quan",
          ],
          khong_bao_gom: [
            "Vé máy bay/tàu cao tốc",
            "Chi phí cá nhân",
            "Vé VinWonders/Safari",
          ],
        },
      ],
    },
    nha_trang: {
      ten_tinh: "Nha Trang (Khánh Hòa)",
      danh_sach_tour: [
        {
          id_tour: "NT_3N2D",
          ten_tour: "Vịnh Biển Nha Trang - Tour 3 Đảo",
          thoi_gian: "3 Ngày 2 Đêm",
          diem_don: ["Sân bay Cam Ranh", "Ga Nha Trang", "Khách sạn trung tâm"],
          mo_ta_ngan:
            "Đắm mình trong làn nước xanh biếc của vịnh Nha Trang, khám phá các hòn đảo xinh đẹp và thưởng thức hải sản tươi ngon.",
          hinh_anh_dai_dien: "/anh/nhatrang_3dao.png",
          gia_tour: {
            gia_co_ban_nguoi_lon: 3200000,
            gia_tre_em: 1600000,
            ghi_chu_gia: "",
          },
          phuong_tien_noi_dia: "Ô tô, Tàu/Cano",
          lich_trinh_chi_tiet: [
            {
              ngay: 1,
              tieu_de: "Chào Nha Trang - Khám Phá Thành Phố",
              hoat_dong: [
                {
                  gio: "Trưa",
                  mo_ta:
                    "Đón khách tại điểm hẹn, về khách sạn nhận phòng, ăn trưa.",
                },
                {
                  gio: "14:30",
                  mo_ta:
                    "Tham quan Tháp Bà Ponagar, Chùa Long Sơn (Tượng Phật trắng).",
                },
                { gio: "18:30", mo_ta: "Ăn tối. Tự do dạo biển." },
              ],
            },
            {
              ngay: 2,
              tieu_de: "Du Ngoạn Vịnh Nha Trang - 3 Đảo",
              hoat_dong: [
                {
                  gio: "08:30",
                  mo_ta:
                    "Xe đưa ra cảng, lên tàu/cano bắt đầu hành trình khám phá Vịnh.",
                },
                {
                  gio: "09:30",
                  mo_ta: "Đến Vịnh San Hô, tự do bơi lặn ngắm san hô.",
                },
                {
                  gio: "12:00",
                  mo_ta: "Ăn trưa trên tàu/tại Làng Chài.",
                },
                {
                  gio: "14:00",
                  mo_ta:
                    "Tàu đến Bãi Tranh, nghỉ ngơi, tắm biển, tham gia các trò chơi thể thao trên biển (chi phí tự túc).",
                },
                {
                  gio: "16:00",
                  mo_ta: "Tàu về đất liền, xe đưa về khách sạn.",
                },
                { gio: "19:00", mo_ta: "Ăn tối." },
              ],
            },
            {
              ngay: 3,
              tieu_de: "Tạm Biệt Nha Trang",
              hoat_dong: [
                {
                  gio: "Sáng",
                  mo_ta: "Ăn sáng. Đi chợ Đầm mua sắm đặc sản.",
                },
                { gio: "11:00", mo_ta: "Trả phòng, ăn trưa." },
                {
                  gio: "Chiều",
                  mo_ta: "Xe đưa ra điểm hẹn ban đầu. Kết thúc tour.",
                },
              ],
            },
          ],
          bao_gom: [
            "Khách sạn 3 sao",
            "Các bữa ăn",
            "Xe đưa đón",
            "Tàu/cano tham quan vịnh",
            "Vé tham quan",
          ],
          khong_bao_gom: [
            "Vé máy bay/tàu/xe",
            "Chi phí cá nhân",
            "Chi phí trò chơi trên biển",
          ],
        },
        {
          id_tour: "NT_4N3D",
          ten_tour: "Nha Trang - VinWonders - Tắm Bùn",
          thoi_gian: "4 Ngày 3 Đêm",
          diem_don: ["Sân bay Cam Ranh", "Ga Nha Trang", "Khách sạn trung tâm"],
          mo_ta_ngan:
            "Hành trình nghỉ dưỡng và giải trí đỉnh cao với một ngày vui chơi không giới hạn tại VinWonders và thư giãn với tắm bùn khoáng.",
          hinh_anh_dai_dien: "/anh/nhatrang_vinwonders.png",
          gia_tour: {
            gia_co_ban_nguoi_lon: 4900000,
            gia_tre_em: 2800000,
            ghi_chu_gia: "Giá đã bao gồm vé VinWonders và tắm bùn.",
          },
          phuong_tien_noi_dia: "Ô tô, Tàu/Cano, Cáp treo",
          lich_trinh_chi_tiet: [
            {
              ngay: 1,
              tieu_de: "Chào Nha Trang - Khám Phá Thành Phố",
              hoat_dong: [],
            },
            {
              ngay: 2,
              tieu_de: "Du Ngoạn Vịnh Nha Trang - 3 Đảo",
              hoat_dong: [],
            },
            {
              ngay: 3,
              tieu_de: "Vui Chơi Bất Tận Tại VinWonders",
              hoat_dong: [
                {
                  gio: "08:30",
                  mo_ta:
                    "Xe đưa đến cảng Vinpearl, đi cáp treo vượt biển đến đảo Hòn Tre.",
                },
                {
                  gio: "09:00-17:00",
                  mo_ta:
                    "Tự do khám phá VinWonders với hàng trăm trò chơi trong nhà và ngoài trời, công viên nước, thủy cung, xem biểu diễn cá heo...",
                },
                { gio: "Trưa", mo_ta: "Ăn trưa tự túc tại VinWonders." },
                { gio: "17:30", mo_ta: "Quay về đất liền." },
                { gio: "19:00", mo_ta: "Ăn tối." },
              ],
            },
            {
              ngay: 4,
              tieu_de: "Thư Giãn Tắm Bùn - Tạm Biệt",
              hoat_dong: [
                {
                  gio: "Sáng",
                  mo_ta:
                    "Ăn sáng. Trải nghiệm dịch vụ tắm bùn khoáng nóng tại I-Resort.",
                },
                { gio: "11:00", mo_ta: "Trả phòng, ăn trưa." },
                {
                  gio: "Chiều",
                  mo_ta: "Xe đưa ra điểm hẹn ban đầu. Kết thúc tour.",
                },
              ],
            },
          ],
          bao_gom: [
            "Khách sạn 3 sao",
            "Các bữa ăn",
            "Xe đưa đón",
            "Tàu/cano",
            "Vé tham quan",
            "Vé VinWonders",
            "Vé tắm bùn",
          ],
          khong_bao_gom: [
            "Vé máy bay/tàu/xe",
            "Chi phí cá nhân",
            "Ăn trưa tại VinWonders",
          ],
        },
      ],
    },
    da_nang_hue_hoi_an: {
      ten_tinh: "Đà Nẵng - Huế - Hội An",
      danh_sach_tour: [
        {
          id_tour: "DNHH_4N3D",
          ten_tour: "Con Đường Di Sản Miền Trung - Gói Gọn",
          thoi_gian: "4 Ngày 3 Đêm",
          diem_don: [
            "Sân bay Đà Nẵng",
            "Ga Đà Nẵng",
            "Khách sạn trung tâm Đà Nẵng",
          ],
          mo_ta_ngan:
            "Hành trình tốc hành qua 3 địa danh nổi tiếng bậc nhất miền Trung, cảm nhận vẻ đẹp của di sản, hiện đại và cổ kính.",
          hinh_anh_dai_dien: "/anh/dnhh_4n3d.png",
          gia_tour: {
            gia_co_ban_nguoi_lon: 4600000,
            gia_tre_em: 2400000,
            ghi_chu_gia: "",
          },
          phuong_tien_noi_dia: "Ô tô du lịch",
          lich_trinh_chi_tiet: [
            {
              ngay: 1,
              tieu_de: "Đà Nẵng - Sơn Trà - Hội An",
              hoat_dong: [
                {
                  gio: "Trưa",
                  mo_ta:
                    "Đón khách tại Đà Nẵng, ăn trưa. Tham quan bán đảo Sơn Trà.",
                },
                {
                  gio: "15:00",
                  mo_ta: "Khởi hành đi Hội An. Trên đường ghé Ngũ Hành Sơn.",
                },
                {
                  gio: "17:00",
                  mo_ta: "Nhận phòng tại Hội An. Bách bộ tham quan Phố Cổ.",
                },
                {
                  gio: "19:00",
                  mo_ta: "Ăn tối đặc sản Hội An. Tự do dạo phố đèn lồng.",
                },
              ],
            },
            {
              ngay: 2,
              tieu_de: "Bà Nà Hills - Cầu Vàng",
              hoat_dong: [
                {
                  gio: "08:00",
                  mo_ta:
                    "Từ Hội An đi Bà Nà Hills. Trải nghiệm cáp treo, tham quan Cầu Vàng, Làng Pháp.",
                },
                { gio: "12:00", mo_ta: "Buffet trưa trên Bà Nà." },
                { gio: "16:00", mo_ta: "Về lại Đà Nẵng nhận phòng." },
                { gio: "19:00", mo_ta: "Ăn tối. Tự do dạo biển Mỹ Khê." },
              ],
            },
            {
              ngay: 3,
              tieu_de: "Hành Trình Về Cố Đô Huế",
              hoat_dong: [
                { gio: "08:00", mo_ta: "Khởi hành đi Huế qua đèo Hải Vân." },
                { gio: "12:00", mo_ta: "Đến Huế, ăn trưa, nhận phòng." },
                { gio: "14:30", mo_ta: "Tham quan Đại Nội Huế." },
                { gio: "17:00", mo_ta: "Viếng Chùa Thiên Mụ." },
                {
                  gio: "19:00",
                  mo_ta: "Ăn tối. Nghe ca Huế trên sông Hương.",
                },
              ],
            },
            {
              ngay: 4,
              tieu_de: "Lăng Tẩm Huế - Tạm Biệt",
              hoat_dong: [
                { gio: "08:00", mo_ta: "Tham quan Lăng Khải Định." },
                { gio: "11:00", mo_ta: "Trả phòng, ăn trưa." },
                {
                  gio: "Chiều",
                  mo_ta:
                    "Xe đưa ra sân bay Phú Bài (Huế) hoặc về lại sân bay Đà Nẵng. Kết thúc tour.",
                },
              ],
            },
          ],
          bao_gom: [
            "Khách sạn 3 sao",
            "Các bữa ăn",
            "Xe đưa đón",
            "Vé tham quan",
            "Vé Bà Nà Hills",
          ],
          khong_bao_gom: ["Vé máy bay/tàu/xe", "Chi phí cá nhân"],
        },
      ],
    },
    thanh_hoa: {
      ten_tinh: "Thanh Hóa",
      danh_sach_tour: [
        {
          id_tour: "TH_2N1D_SS",
          ten_tour: "Sầm Sơn Biển Gọi",
          thoi_gian: "2 Ngày 1 Đêm",
          diem_don: ["Trung tâm TP. Hà Nội"],
          mo_ta_ngan:
            "Kỳ nghỉ cuối tuần sôi động tại bãi biển Sầm Sơn, một trong những bãi biển nổi tiếng nhất miền Bắc.",
          hinh_anh_dai_dien: "/anh/thanhhoa_samson.png",
          gia_tour: {
            gia_co_ban_nguoi_lon: 1800000,
            gia_tre_em: 900000,
            ghi_chu_gia: "Tour khởi hành từ Hà Nội.",
          },
          phuong_tien_noi_dia: "Ô tô du lịch",
          lich_trinh_chi_tiet: [
            {
              ngay: 1,
              tieu_de: "Hà Nội - Sầm Sơn",
              hoat_dong: [
                {
                  gio: "07:00",
                  mo_ta: "Xe đón tại Hà Nội, khởi hành đi Sầm Sơn, Thanh Hóa.",
                },
                {
                  gio: "11:30",
                  mo_ta: "Đến Sầm Sơn, nhận phòng, ăn trưa.",
                },
                { gio: "Chiều", mo_ta: "Tự do tắm biển Sầm Sơn." },
                { gio: "19:00", mo_ta: "Ăn tối. Tự do dạo phố biển." },
              ],
            },
            {
              ngay: 2,
              tieu_de: "Hòn Trống Mái - Về Hà Nội",
              hoat_dong: [
                {
                  gio: "Sáng",
                  mo_ta: "Ăn sáng. Tham quan Hòn Trống Mái, Đền Độc Cước.",
                },
                { gio: "11:30", mo_ta: "Trả phòng, ăn trưa." },
                { gio: "14:00", mo_ta: "Lên xe trở về Hà Nội." },
                { gio: "18:00", mo_ta: "Về đến Hà Nội. Kết thúc tour." },
              ],
            },
          ],
          bao_gom: ["Khách sạn", "Các bữa ăn", "Xe đưa đón Hà Nội - Sầm Sơn"],
          khong_bao_gom: ["Đồ uống, chi phí cá nhân"],
        },
        {
          id_tour: "TH_3N2D_PL",
          ten_tour: "Khám Phá Pù Luông - Vẻ Đẹp Tây Bắc",
          thoi_gian: "3 Ngày 2 Đêm",
          diem_don: ["Trung tâm TP. Hà Nội"],
          mo_ta_ngan:
            "Lẩn trốn khỏi phố thị, tìm về với Pù Luông bình yên, chiêm ngưỡng những thửa ruộng bậc thang và trải nghiệm văn hóa bản địa.",
          hinh_anh_dai_dien: "/anh/thanhhoa_puluong.png",
          gia_tour: {
            gia_co_ban_nguoi_lon: 2900000,
            gia_tre_em: 1500000,
            ghi_chu_gia: "Tour khởi hành từ Hà Nội. Ở tại homestay/resort.",
          },
          phuong_tien_noi_dia: "Ô tô du lịch",
          lich_trinh_chi_tiet: [
            {
              ngay: 1,
              tieu_de: "Hà Nội - Pù Luông - Bản Đôn",
              hoat_dong: [
                {
                  gio: "07:00",
                  mo_ta: "Xe đón tại Hà Nội, khởi hành đi Pù Luông.",
                },
                { gio: "12:00", mo_ta: "Đến Pù Luông, ăn trưa, nhận phòng." },
                {
                  gio: "14:30",
                  mo_ta:
                    "Trekking nhẹ nhàng khám phá các bản làng người Thái, ruộng bậc thang tại Bản Đôn.",
                },
                { gio: "19:00", mo_ta: "Ăn tối với đặc sản địa phương." },
              ],
            },
            {
              ngay: 2,
              tieu_de: "Thác Hiêu - Guồng Nước",
              hoat_dong: [
                {
                  gio: "08:00",
                  mo_ta: "Khám phá Thác Hiêu, tự do tắm thác.",
                },
                { gio: "12:00", mo_ta: "Ăn trưa." },
                {
                  gio: "14:00",
                  mo_ta:
                    "Tham quan và check-in với các guồng nước khổng lồ - biểu tượng của Pù Luông.",
                },
                { gio: "18:30", mo_ta: "Ăn tối." },
              ],
            },
            {
              ngay: 3,
              tieu_de: "Chợ Phiên Phố Đoàn - Về Hà Nội",
              hoat_dong: [
                {
                  gio: "Sáng",
                  mo_ta:
                    "Tham quan chợ phiên Phố Đoàn (nếu vào sáng Chủ nhật).",
                },
                { gio: "11:30", mo_ta: "Trả phòng, ăn trưa." },
                { gio: "13:30", mo_ta: "Lên xe về Hà Nội." },
                { gio: "19:00", mo_ta: "Về đến Hà Nội. Kết thúc tour." },
              ],
            },
          ],
          bao_gom: [
            "Homestay/resort",
            "Các bữa ăn",
            "Xe đưa đón Hà Nội - Pù Luông",
            "Vé tham quan",
          ],
          khong_bao_gom: ["Đồ uống, chi phí cá nhân"],
        },
      ],
    },
    ha_noi: {
      ten_tinh: "Hà Nội",
      danh_sach_tour: [
        {
          id_tour: "HN_1D",
          ten_tour: "City Tour Hà Nội - Một Ngày Lịch Sử",
          thoi_gian: "1 Ngày",
          diem_don: ["Khách sạn khu vực Phố Cổ"],
          mo_ta_ngan:
            "Khám phá những di tích lịch sử và văn hóa ngàn năm của thủ đô Hà Nội chỉ trong một ngày.",
          hinh_anh_dai_dien: "/anh/hanoi_1d.png",
          gia_tour: {
            gia_co_ban_nguoi_lon: 950000,
            gia_tre_em: 500000,
            ghi_chu_gia: "Không bao gồm show múa rối nước.",
          },
          phuong_tien_noi_dia: "Ô tô du lịch / Xích lô",
          lich_trinh_chi_tiet: [
            {
              ngay: 1,
              tieu_de: "Lịch Sử & Văn Hóa",
              hoat_dong: [
                {
                  gio: "08:00",
                  mo_ta:
                    "Đón khách. Tham quan Chùa Trấn Quốc, Lăng Chủ tịch Hồ Chí Minh, Chùa Một Cột.",
                },
                { gio: "12:00", mo_ta: "Ăn trưa." },
                {
                  gio: "13:30",
                  mo_ta: "Tham quan Văn Miếu - Quốc Tử Giám.",
                },
                {
                  gio: "15:00",
                  mo_ta: "Tham quan Bảo tàng Dân tộc học hoặc Nhà tù Hỏa Lò.",
                },
                {
                  gio: "16:30",
                  mo_ta: "Dạo quanh Hồ Hoàn Kiếm, thăm Đền Ngọc Sơn.",
                },
                { gio: "17:30", mo_ta: "Kết thúc tour." },
              ],
            },
          ],
          bao_gom: ["Xe đưa đón", "Ăn trưa", "Vé tham quan", "Hướng dẫn viên"],
          khong_bao_gom: ["Đồ uống, chi phí cá nhân"],
        },
        {
          id_tour: "HN_2N1D",
          ten_tour: "Hà Nội 36 Phố Phường",
          thoi_gian: "2 Ngày 1 Đêm",
          diem_don: ["Sân bay Nội Bài", "Khách sạn khu vực Phố Cổ"],
          mo_ta_ngan:
            "Sống chậm lại để cảm nhận trọn vẹn vẻ đẹp cổ kính, ẩm thực đặc sắc và nhịp sống của thủ đô.",
          hinh_anh_dai_dien: "/anh/hanoi_2n1d.png",
          gia_tour: {
            gia_co_ban_nguoi_lon: 2400000,
            gia_tre_em: 1200000,
            ghi_chu_gia: "",
          },
          phuong_tien_noi_dia: "Ô tô du lịch, xích lô",
          lich_trinh_chi_tiet: [
            {
              ngay: 1,
              tieu_de: "City Tour Lịch Sử & Văn Hóa",
              hoat_dong: [
                {
                  gio: "Sáng/Trưa",
                  mo_ta: "Đón khách, ăn trưa, nhận phòng.",
                },
                {
                  gio: "14:00",
                  mo_ta:
                    "Tham quan Văn Miếu - Quốc Tử Giám, Hồ Hoàn Kiếm, Đền Ngọc Sơn.",
                },
                {
                  gio: "16:00",
                  mo_ta: "Trải nghiệm xích lô dạo 36 phố phường.",
                },
                { gio: "18:00", mo_ta: "Xem show Múa rối nước." },
                {
                  gio: "19:30",
                  mo_ta: "Ăn tối (chả cá Lã Vọng hoặc phở).",
                },
              ],
            },
            {
              ngay: 2,
              tieu_de: "Làng Gốm Bát Tràng - Tạm Biệt",
              hoat_dong: [
                {
                  gio: "08:30",
                  mo_ta: "Tham quan làng gốm Bát Tràng, thử tự tay làm gốm.",
                },
                { gio: "12:00", mo_ta: "Ăn trưa." },
                {
                  gio: "Chiều",
                  mo_ta: "Xe đưa ra sân bay/điểm hẹn. Kết thúc tour.",
                },
              ],
            },
          ],
          bao_gom: [
            "Khách sạn 3 sao",
            "Các bữa ăn",
            "Xe đưa đón",
            "Vé tham quan",
            "Xích lô",
            "Vé múa rối nước",
          ],
          khong_bao_gom: ["Vé máy bay/tàu/xe đến Hà Nội", "Chi phí cá nhân"],
        },
      ],
    },
    ninh_binh: {
      ten_tinh: "Ninh Bình",
      danh_sach_tour: [
        {
          id_tour: "NB_1D",
          ten_tour: "Tràng An - Bái Đính Trong Ngày",
          thoi_gian: "1 Ngày",
          diem_don: ["Khách sạn khu vực Phố Cổ Hà Nội"],
          mo_ta_ngan:
            "Hành trình về với di sản thế giới Tràng An, chiêm bái ngôi chùa lớn nhất Đông Nam Á chỉ trong một ngày.",
          hinh_anh_dai_dien: "/anh/ninhbinh_1d.png",
          gia_tour: {
            gia_co_ban_nguoi_lon: 1200000,
            gia_tre_em: 700000,
            ghi_chu_gia: "Tour khởi hành từ Hà Nội.",
          },
          phuong_tien_noi_dia: "Ô tô du lịch, thuyền",
          lich_trinh_chi_tiet: [
            {
              ngay: 1,
              tieu_de: "Hà Nội - Bái Đính - Tràng An",
              hoat_dong: [
                {
                  gio: "08:00",
                  mo_ta: "Xe đón tại Hà Nội, khởi hành đi Ninh Bình.",
                },
                { gio: "10:30", mo_ta: "Tham quan Chùa Bái Đính." },
                {
                  gio: "12:30",
                  mo_ta: "Ăn trưa buffet với đặc sản thịt dê.",
                },
                {
                  gio: "14:00",
                  mo_ta:
                    "Lên thuyền đi tham quan khu du lịch sinh thái Tràng An.",
                },
                { gio: "17:00", mo_ta: "Lên xe trở về Hà Nội." },
                { gio: "19:30", mo_ta: "Về đến Hà Nội. Kết thúc tour." },
              ],
            },
          ],
          bao_gom: [
            "Xe đưa đón",
            "Ăn trưa",
            "Vé tham quan",
            "Thuyền Tràng An",
            "Xe điện Bái Đính",
          ],
          khong_bao_gom: ["Đồ uống, chi phí cá nhân"],
        },
        {
          id_tour: "NB_2N1D",
          ten_tour: "Ninh Bình - Non Nước Hữu Tình",
          thoi_gian: "2 Ngày 1 Đêm",
          diem_don: ["Khách sạn khu vực Phố Cổ Hà Nội"],
          mo_ta_ngan:
            "Tận hưởng trọn vẹn vẻ đẹp của 'Hạ Long trên cạn' với 2 ngày thư thái tại Ninh Bình.",
          hinh_anh_dai_dien: "/anh/ninhbinh_2n1d.png",
          gia_tour: {
            gia_co_ban_nguoi_lon: 2500000,
            gia_tre_em: 1300000,
            ghi_chu_gia: "Tour khởi hành từ Hà Nội. Ở tại homestay/resort.",
          },
          phuong_tien_noi_dia: "Ô tô du lịch, thuyền",
          lich_trinh_chi_tiet: [
            {
              ngay: 1,
              tieu_de: "Hà Nội - Hoa Lư - Tam Cốc",
              hoat_dong: [
                {
                  gio: "08:00",
                  mo_ta:
                    "Xe đón tại Hà Nội đi Ninh Bình. Tham quan Cố đô Hoa Lư.",
                },
                { gio: "12:30", mo_ta: "Ăn trưa, nhận phòng." },
                {
                  gio: "14:30",
                  mo_ta: "Đi thuyền tham quan Tam Cốc - Bích Động.",
                },
                {
                  gio: "16:30",
                  mo_ta: "Tự do đạp xe khám phá làng quê.",
                },
                { gio: "19:00", mo_ta: "Ăn tối." },
              ],
            },
            {
              ngay: 2,
              tieu_de: "Hang Múa - Tràng An - Về Hà Nội",
              hoat_dong: [
                {
                  gio: "08:00",
                  mo_ta: "Chinh phục đỉnh Ngọa Long tại Hang Múa.",
                },
                { gio: "10:00", mo_ta: "Tham quan khu du lịch Tràng An." },
                { gio: "13:00", mo_ta: "Trả phòng, ăn trưa." },
                { gio: "15:00", mo_ta: "Lên xe về Hà Nội." },
                { gio: "17:30", mo_ta: "Về đến Hà Nội. Kết thúc tour." },
              ],
            },
          ],
          bao_gom: [
            "Homestay/resort",
            "Các bữa ăn",
            "Xe đưa đón",
            "Vé tham quan",
            "Thuyền",
          ],
          khong_bao_gom: ["Đồ uống, chi phí cá nhân"],
        },
      ],
    },
    lao_cai: {
      ten_tinh: "Lào Cai (Sa Pa)",
      danh_sach_tour: [
        {
          id_tour: "SP_2N1D",
          ten_tour: "Sa Pa - Thị Trấn Trong Sương",
          thoi_gian: "2 Ngày 1 Đêm",
          diem_don: ["Khu vực Phố Cổ Hà Nội"],
          mo_ta_ngan:
            "Hành trình ngắn ngày đến với Sa Pa, chiêm ngưỡng vẻ đẹp hùng vĩ của núi rừng và khám phá văn hóa các dân tộc thiểu số.",
          hinh_anh_dai_dien: "/anh/sapa_2n1d.png",
          gia_tour: {
            gia_co_ban_nguoi_lon: 2300000,
            gia_tre_em: 1200000,
            ghi_chu_gia: "Khởi hành từ Hà Nội bằng xe giường nằm.",
          },
          phuong_tien_noi_dia: "Xe giường nằm, ô tô",
          lich_trinh_chi_tiet: [
            {
              ngay: 1,
              tieu_de: "Hà Nội - Sa Pa - Bản Cát Cát",
              hoat_dong: [
                {
                  gio: "Tối hôm trước",
                  mo_ta: "Lên xe giường nằm tại Hà Nội khởi hành đi Sa Pa.",
                },
                {
                  gio: "06:00",
                  mo_ta: "Đến Sa Pa, ăn sáng, nhận phòng (nếu có phòng sớm).",
                },
                {
                  gio: "09:00",
                  mo_ta: "Đi bộ tham quan bản Cát Cát của người H'Mông.",
                },
                { gio: "12:30", mo_ta: "Ăn trưa." },
                {
                  gio: "Chiều",
                  mo_ta: "Tự do khám phá nhà thờ Đá, hồ Sa Pa.",
                },
                {
                  gio: "19:00",
                  mo_ta: "Ăn tối. Tự do dạo chợ tình (nếu vào tối Thứ 7).",
                },
              ],
            },
            {
              ngay: 2,
              tieu_de: "Núi Hàm Rồng - Về Hà Nội",
              hoat_dong: [
                {
                  gio: "08:00",
                  mo_ta: "Tham quan khu du lịch núi Hàm Rồng.",
                },
                { gio: "12:00", mo_ta: "Trả phòng, ăn trưa." },
                {
                  gio: "14:00",
                  mo_ta: "Lên xe giường nằm về lại Hà Nội.",
                },
                { gio: "20:00", mo_ta: "Về đến Hà Nội. Kết thúc tour." },
              ],
            },
          ],
          bao_gom: [
            "Xe giường nằm khứ hồi",
            "Khách sạn 2-3 sao",
            "Các bữa ăn",
            "Vé tham quan",
          ],
          khong_bao_gom: ["Đồ uống, chi phí cá nhân"],
        },
        {
          id_tour: "SP_3N2D",
          ten_tour: "Sa Pa - Chinh Phục Nóc Nhà Đông Dương",
          thoi_gian: "3 Ngày 2 Đêm",
          diem_don: ["Khu vực Phố Cổ Hà Nội"],
          mo_ta_ngan:
            "Hành trình đầy đủ để khám phá Sa Pa và chinh phục đỉnh Fansipan bằng cáp treo hiện đại.",
          hinh_anh_dai_dien: "/anh/sapa_fansipan.png",
          gia_tour: {
            gia_co_ban_nguoi_lon: 3600000,
            gia_tre_em: 2000000,
            ghi_chu_gia:
              "Khởi hành từ Hà Nội bằng xe giường nằm. Đã bao gồm vé cáp treo Fansipan.",
          },
          phuong_tien_noi_dia: "Xe giường nằm, ô tô, cáp treo",
          lich_trinh_chi_tiet: [
            {
              ngay: 1,
              tieu_de: "Hà Nội - Sa Pa - Bản Cát Cát",
              hoat_dong: [],
            },
            {
              ngay: 2,
              tieu_de: "Chinh Phục Fansipan",
              hoat_dong: [
                {
                  gio: "08:00",
                  mo_ta: "Xe đưa đến ga cáp treo Fansipan.",
                },
                {
                  gio: "09:00-12:00",
                  mo_ta:
                    "Trải nghiệm cáp treo, chinh phục đỉnh Fansipan - Nóc nhà Đông Dương.",
                },
                { gio: "12:30", mo_ta: "Ăn trưa." },
                {
                  gio: "Chiều",
                  mo_ta: "Tự do mua sắm, massage chân.",
                },
                { gio: "19:00", mo_ta: "Ăn tối." },
              ],
            },
            {
              ngay: 3,
              tieu_de: "Núi Hàm Rồng - Về Hà Nội",
              hoat_dong: [
                {
                  gio: "08:00",
                  mo_ta: "Tham quan khu du lịch núi Hàm Rồng.",
                },
                { gio: "12:00", mo_ta: "Trả phòng, ăn trưa." },
                {
                  gio: "14:00",
                  mo_ta: "Lên xe giường nằm về lại Hà Nội.",
                },
                { gio: "20:00", mo_ta: "Về đến Hà Nội. Kết thúc tour." },
              ],
            },
          ],
          bao_gom: [
            "Xe giường nằm khứ hồi",
            "Khách sạn 2-3 sao",
            "Các bữa ăn",
            "Vé tham quan",
            "Vé cáp treo Fansipan",
          ],
          khong_bao_gom: ["Đồ uống, chi phí cá nhân"],
        },
      ],
    },
  };

  // Thêm sự kiện 'submit' cho form
  tourForm.addEventListener("submit", (event) => {
    // Ngăn chặn hành vi mặc định của form là tải lại trang
    event.preventDefault();

    // Hiển thị thông báo đang xử lý
    resultsContainer.innerHTML = `
        <div class="placeholder-text">
          <i class="fas fa-magic fa-2x fa-spin"></i><br>
          AI đang phân tích yêu cầu của bạn và thiết kế hành trình... <br> Mong bạn chờ trong giây lát!
        </div>`;

    // --- 1. Lấy dữ liệu người dùng nhập từ form ---
    const destinationInput = document
      .getElementById("destination")
      .value.trim()
      .toLowerCase();
    const departureDate = document.getElementById("departure-date").value;
    const returnDate = document.getElementById("return-date").value;
    const adults = parseInt(document.getElementById("adults").value, 10);
    const children = parseInt(document.getElementById("children").value, 10);

    // --- 2. Kiểm tra dữ liệu đầu vào ---
    if (!destinationInput || !departureDate || !returnDate) {
      resultsContainer.innerHTML = `
          <div class="placeholder-text" style="color: red; border-color: red;">
              Vui lòng nhập đầy đủ Điểm đến, Ngày đi và Ngày về!
          </div>`;
      return;
    }

    const d_start = new Date(departureDate);
    const d_end = new Date(returnDate);

    if (d_end < d_start) {
      resultsContainer.innerHTML = `
          <div class="placeholder-text" style="color: red; border-color: red;">
              Ngày về phải sau hoặc trùng với Ngày đi. Vui lòng kiểm tra lại!
          </div>`;
      return;
    }

    // --- 3. Tính toán số ngày của chuyến đi ---
    const durationDays =
      Math.ceil((d_end - d_start) / (1000 * 60 * 60 * 24)) + 1;

    // --- 4. Tìm kiếm tour phù hợp (dữ liệu đã có sẵn trong biến allToursData) ---
    // Sử dụng setTimeout để giả lập quá trình xử lý của AI, giúp người dùng thấy thông báo "đang xử lý"
    setTimeout(() => {
      try {
        const matchedTour = findMatchingTour(
          allToursData,
          destinationInput,
          durationDays
        );

        // --- 5. Hiển thị kết quả ---
        if (matchedTour) {
          const tourPrice = matchedTour.gia_tour;
          const totalCost =
            tourPrice.gia_co_ban_nguoi_lon * adults +
            tourPrice.gia_tre_em * children;

          const tourHtml = generateTourHtml(
            matchedTour,
            adults,
            children,
            totalCost
          );
          resultsContainer.innerHTML = tourHtml;

          const bookingButton = document.getElementById("final-booking-btn");
          bookingButton.addEventListener("click", () => {
            alert(
              `Cảm ơn bạn đã đặt tour "${
                matchedTour.ten_tour
              }".\nTổng chi phí: ${totalCost.toLocaleString(
                "vi-VN"
              )} VNĐ.\nNhân viên của chúng tôi sẽ sớm liên hệ với bạn để xác nhận.`
            );
          });
        } else {
          resultsContainer.innerHTML = `
              <div class="placeholder-text">
                  <i class="fas fa-search-minus fa-2x"></i><br>
                  Rất tiếc, AI không tìm thấy tour nào phù hợp với <strong>${
                    document.getElementById("destination").value
                  }</strong> trong <strong>${durationDays} ngày</strong>.
                  <br>Vui lòng thử một điểm đến hoặc số ngày khác.
              </div>`;
        }
      } catch (error) {
        console.error("Lỗi khi xử lý:", error);
        resultsContainer.innerHTML = `
            <div class="placeholder-text" style="color: red; border-color: red;">
                Đã có lỗi xảy ra trong quá trình xử lý. Vui lòng thử lại sau.
            </div>`;
      }
    }, 1500);
  });

  /**
   * Tìm kiếm tour phù hợp dựa trên điểm đến và số ngày
   * @param {object} tourData - Toàn bộ dữ liệu tour
   * @param {string} destination - Điểm đến người dùng nhập
   * @param {number} duration - Số ngày của chuyến đi
   * @returns {object|null} - Trả về object tour nếu tìm thấy, ngược lại trả về null
   */
  function findMatchingTour(tourData, destination, duration) {
    const destinationMapping = {
      "đà lạt": "da_lat",
      dalat: "da_lat",
      "hồ chí minh": "ho_chi_minh",
      hcm: "ho_chi_minh",
      "sài gòn": "ho_chi_minh",
      "phú quốc": "phu_quoc",
      "phu quoc": "phu_quoc",
      "nha trang": "nha_trang",
      "đà nẵng": "da_nang_hue_hoi_an",
      "da nang": "da_nang_hue_hoi_an",
      huế: "da_nang_hue_hoi_an",
      hue: "da_nang_hue_hoi_an",
      "hội an": "da_nang_hue_hoi_an",
      "hoi an": "da_nang_hue_hoi_an",
      "thanh hóa": "thanh_hoa",
      "thanh hoa": "thanh_hoa",
      "pù luông": "thanh_hoa",
      "pu luong": "thanh_hoa",
      "sầm sơn": "thanh_hoa",
      "hà nội": "ha_noi",
      "ha noi": "ha_noi",
      "ninh bình": "ninh_binh",
      "ninh binh": "ninh_binh",
      "lào cai": "lao_cai",
      "lao cai": "lao_cai",
      sapa: "lao_cai",
      "sa pa": "lao_cai",
    };

    const tourKey = destinationMapping[destination];
    if (!tourKey || !tourData[tourKey]) {
      return null;
    }

    const destinationTours = tourData[tourKey].danh_sach_tour;

    const foundTour = destinationTours.find((tour) => {
      const tourDuration = parseInt(tour.thoi_gian, 10);
      return tourDuration === duration;
    });

    return foundTour || null;
  }

  /**
   * Tạo chuỗi HTML để hiển thị chi tiết tour
   * @param {object} tour - Object chứa thông tin tour tìm thấy
   * @param {number} adults - Số người lớn
   * @param {number} children - Số trẻ em
   * @param {number} totalCost - Tổng chi phí đã tính
   * @returns {string} - Chuỗi HTML hoàn chỉnh
   */
  function generateTourHtml(tour, adults, children, totalCost) {
    const formatCurrency = (amount) => amount.toLocaleString("vi-VN");

    return `
        <h2 class="section-title">Hành Trình Dành Riêng Cho Bạn</h2>
          <div class="tour-result-content">
            <h3>${tour.ten_tour}</h3>
            <p class="tour-duration"><i class="fas fa-clock"></i> ${
              tour.thoi_gian
            }</p>
            <p class="tour-description">${tour.mo_ta_ngan}</p>
            
            <div class="tour-details">
              <h4><i class="fas fa-info-circle"></i> Chi Tiết Lịch Trình</h4>
              <div class="itinerary">
                ${tour.lich_trinh_chi_tiet
                  .map(
                    (day) => `
                  <div class="day-schedule">
                    <strong>Ngày ${day.ngay}: ${day.tieu_de}</strong>
                    <ul>
                      ${day.hoat_dong
                        .map(
                          (activity) =>
                            `<li><strong>${activity.gio}:</strong> ${activity.mo_ta}</li>`
                        )
                        .join("")}
                    </ul>
                  </div>
                `
                  )
                  .join("")}
              </div>
  
              <h4><i class="fas fa-check-circle"></i> Tour Bao Gồm</h4>
              <ul class="includes">
                ${tour.bao_gom.map((item) => `<li>${item}</li>`).join("")}
              </ul>
  
              <h4><i class="fas fa-times-circle"></i> Tour Không Bao Gồm</h4>
              <ul class="excludes">
                ${tour.khong_bao_gom.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
  
            <div class="tour-pricing">
              <h4><i class="fas fa-dollar-sign"></i> Bảng Giá Chi Tiết</h4>
              <p>Số người lớn: <strong>${adults}</strong> x ${formatCurrency(
      tour.gia_tour.gia_co_ban_nguoi_lon
    )} VNĐ</p>
              <p>Số trẻ em: <strong>${children}</strong> x ${formatCurrency(
      tour.gia_tour.gia_tre_em
    )} VNĐ</p>
              <hr>
              <p class="total-price">TỔNG CỘNG: <strong>${formatCurrency(
                totalCost
              )} VNĐ</strong></p>
              <p class="price-note"><em>${tour.gia_tour.ghi_chu_gia}</em></p>
            </div>
  
            <button id="final-booking-btn" class="book-now-button">
              <i class="fas fa-check"></i> Đặt Tour Ngay
            </button>
          </div>
        </div>
      `;
  }
});
