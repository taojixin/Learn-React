import { RoomsWrapper } from "@/components/section-rooms/style";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import RootItem from "@/components/room-item";

const EntireRooms = memo((props) => {
  const { roomList } = useSelector((state) => ({
    roomList: state.entire.roomList,
  }));
  return (
    <RoomsWrapper>
      {roomList.map((item) => {
        return <RootItem itemData={item} itemWIdth="20%" key={item.id} />;
      })}
    </RoomsWrapper>
  );
});

EntireRooms.propTypes = {};

export default EntireRooms;
