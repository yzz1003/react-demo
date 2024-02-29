import { useEffect, useState } from "react";
import { Button, Table, TableProps, message } from "antd";
import { createUser, delUser, userList } from "../../api/module/user";
const User = () => {
  const [list, setList] = useState([]);
  const init = () => {
    userList()
      .then((res) => {
        setList(res);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    console.log("profile 组件初始化");
    init();
  }, []);

  const deleteUser = (id: number) => {
    delUser(id)
      .then((res) => {
        console.log(res);
        message.success(res.message);
        init();
      })
      .catch((e) => console.log(e));
  };
  const columns: TableProps["columns"] = [
    {
      title: "id",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "email",
      dataIndex: "email",
    },
    {
      title: "性别",
      dataIndex: "sex",
    },
    {
      title: "操作",
      dataIndex: "opera",
      render: (_, record) => {
        return (
          <>
            <Button danger type="link" onClick={() => deleteUser(record.id)}>
              删除
            </Button>
          </>
        );
      },
    },
  ];
  return (
    <div>
      <a
        onClick={async () => {
          try {
            await createUser({
              name: "大",
              sex: "男",
              email: "aaa",
              remark: "这是备注",
            });
            await init();
          } catch (e) {
            console.error(e);
          }
        }}
      >
        创建用户
      </a>
      <Table rowKey="id" columns={columns} dataSource={list}></Table>
      {/* 用户 */}
      <div>
        {/* {list?.map((item, index) => (
          <div key={index}>
            {item.id}
            {item.name}
            {item.email}
          </div>
        ))}
        <progress value={0.2} /> */}
      </div>
    </div>
  );
};
export default User;
