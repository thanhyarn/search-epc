import React, { useState } from "react";
import { Input, Row, Col } from "antd";
import data from "./data.json";

const App = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Tách lấy ID từ chuỗi nhập vào
      const id = value.split("\t")[1];
      // Tìm kiếm name dựa trên ID
      const item = data.find((item) => item.id === id);
      if (item) {
        setResult(item.name); // Hiển thị name tương ứng nếu tìm thấy
      } else {
        setResult("Không tìm thấy tên cho ID này"); // Hiển thị thông báo nếu không tìm thấy ID
      }
    }
  };

  return (
    <div style={{ padding: "20px", marginTop: "100px" }}>
      <Row justify="center">
        <Col>
          <Input
            style={{
              width: "500px",
              height: "50px",
              border: "3px solid black",
            }}
            name="valie"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Nhập thông tin..."
            onKeyPress={handleKeyPress}
          />
          <h1>{result}</h1> {/* Hiển thị kết quả tìm được */}
        </Col>
      </Row>
    </div>
  );
};

export default App;
