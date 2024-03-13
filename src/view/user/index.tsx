import { useEffect, useState } from "react";
import { Button, message, Table, TableProps } from "antd";
import { createUser, delUser, userList } from "../../api/module/user";
import { UserInfoDto } from "../../api/interface/xxOpenTypeApi";
import style from "./index.module.css";

const User = () => {
  const [list, setList] = useState<UserInfoDto[]>([]);
  const [total, setTotal] = useState(0);
  const [model, setModel] = useState({
    page: 1,
    take: 10,
  });
  const init = () => {
    userList(model)
      .then((res) => {
        setList(res.data);
        setTotal(res.meta.itemCount);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    init();
  }, [model]);

  const onchange = (params) => {
    console.log(params);
    setModel({ page: params.current, take: params.pageSize });
  };
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
    {},
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
      <Table
        rootClassName={style.aaaa}
        rowKey="id"
        columns={columns}
        dataSource={list}
        pagination={{ total }}
        onChange={onchange}
      ></Table>
      <div className={style.aaa}>111</div>
    </div>
  );
};
export default User;
