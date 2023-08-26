import React from "react";
import { ActionIcon, Stack, Table, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

import { IconTrash } from "@tabler/icons-react";

import { useAppSelector } from "../../hooks/reduxHooks";

import { getHistoryItems } from "../../app/reducers/selectors";

import useHistory from "../../hooks/useHistory";

import styles from "./HistoryPage.module.css";

const HistoryPage = () => {
  const navigate = useNavigate();
  const historyItems = useAppSelector(getHistoryItems);
  const { deleteHistoryById } = useHistory();

  const deleteHistoryClick = (historyId: string) => {
    deleteHistoryById(historyId);
  };

  return (
    <Stack>
      <Text align="center">Search history</Text>
      <Table className={styles.table}>
        <thead>
          <tr>
            <th>Search</th>
            <th>Year</th>
            <th>Type</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {historyItems.map((element) => (
            <tr
              key={element.date}
              onClick={() => {
                navigate(
                  `/search?search=${element.search}&year=${element.year}&type=${element.type}`,
                );
              }}
            >
              <td style={{ width: "60%" }}>{element.search}</td>
              <td style={{ width: "10%" }}>{element.year}</td>
              <td style={{ width: "10%" }}>{element.type}</td>
              <td style={{ width: "15%" }}>{element.date}</td>
              <td
                align="center"
                style={{ width: "5%", cursor: "default" }}
                onClick={(e) => e.stopPropagation()}
              >
                <ActionIcon
                  onClick={() => deleteHistoryClick(element.id)}
                  className={styles.icon}
                >
                  <IconTrash />
                </ActionIcon>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Stack>
  );
};

export default HistoryPage;
