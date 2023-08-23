import React from "react";
import { Checkbox, Grid, Table, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../hooks/reduxHooks";

import { getHistoryItems } from "../../app/reducers/selectors";

import styles from "./HistoryPage.module.css";

const HistoryPage = () => {
  const navigate = useNavigate();
  const historyItems = useAppSelector(getHistoryItems);

  return (
    <Grid>
      <Grid.Col>
        <Text align="center">My search history</Text>
      </Grid.Col>
      <Grid.Col>
        <Table className={styles.table}>
          <thead>
            <tr>
              <th>
                <Checkbox sx={{ input: { cursor: "pointer" } }} />
              </th>
              <th>Search</th>
              <th>Year</th>
              <th>Type</th>
              <th>Date</th>
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
                <td
                  style={{ width: 40, cursor: "default" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Checkbox sx={{ input: { cursor: "pointer" } }} />
                </td>
                <td>{element.search}</td>
                <td>{element.year}</td>
                <td>{element.type}</td>
                <td>{element.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Grid.Col>
    </Grid>
  );
};

export default HistoryPage;
