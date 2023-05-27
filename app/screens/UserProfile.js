import { View, Text, StyleSheet, Image, Modal } from "react-native";
import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import useAuth from "../auth/useAuth";
import { colors } from "../configs/variables";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Button, Input } from "react-native-elements";
import SelectDropdown from 'react-native-select-dropdown';
import apiClient from "../apis/client";
import { updateUser } from "../apis/auth";


export default function UserProfile() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [department, setDepartment] = useState(user.department);
  const [contact, setContact] = useState(user.mobile_number);
  const [role, setRole] = useState(user.role[0]);
  
  const allRoles = ["deanOfacademics","hod","advisor","representative"]

  const allDepartments = [
    "Computer Science and Engineering",
    "Civil Engineering",
    "Mechanical Engineering" ,
    "Electronics Engineering" ,
    "Electrical Engineering" ,
    "Information Technology" ,
    "WCE",
  ];

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const openEditPopup = () => {
    setIsEditing(true);
  };

  const saveProfile = () => {
    user.department = department 
    user.mobile_number = contact;
    user.role[0] = role
    updateUser(user)
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image
          style={styles.image}
          source={require("../images/user.jpg")}
        />

        <View style={styles.textContainer}>
          <Text style={{ fontSize: 26, fontWeight: "500" }}>{user.name}</Text>
          <Text style={styles.info}>{user.email}</Text>
        </View>
      </View>

      <View style={styles.textContainer}>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome5 name="building" size={20} color="black" />
          <Text style={styles.label}>Department</Text>
        </View>
        <Text style={styles.info}>{department}</Text>
      </View>

      {user.role[0] === "representative" && (
        <View style={styles.textContainer}>
          <View style={{ flexDirection: "row" }}>
            <FontAwesome5 name="building" size={20} color="black" />
            <Text style={styles.label}>Representative Club </Text>
          </View>

          <Text style={styles.info}>{user.representative_club}</Text>
        </View>
      )}

      {user.role[0] === "advisor" && (
        <View style={styles.textContainer}>
          <View style={{ flexDirection: "row" }}>
            <FontAwesome5 name="building" size={20} color="black" />
            <Text style={styles.label}>Advisor Club </Text>
          </View>

          {user.advisor_club.map((club, index) => {
            return (
              <Text style={styles.info}>{capitalizeFirstLetter(club)} </Text>
            );
          })}
        </View>
      )}

      <View style={styles.textContainer}>
        <View style={{ flexDirection: "row" }}>
          <Feather name="user" size={20} color="black" />
          <Text style={styles.label}>Role </Text>
        </View>
        <Text key={0} style={styles.info}>{capitalizeFirstLetter(role)} </Text>
        {/* {role.map((role, index) => {
          return (
            <Text key={index} style={styles.info}>{capitalizeFirstLetter(role)} </Text>
          );
        })} */}
      </View>

      <View style={styles.textContainer}>
        <View style={{ flexDirection: "row" }}>
          <Entypo name="mobile" size={20} color="black" />
          <Text style={styles.label}>Contact </Text>
        </View>
        <Text style={styles.info}>{contact}</Text>
      </View>

      {/* Rest of the code... */}

      <View style={styles.textContainer}>
        <View style={{ flexDirection: "row" }}>
          <Button
            title="Edit Profile"
            color="#841584"
            onPress={openEditPopup}
          />
        </View>
      </View>

      {/* Edit Profile Popup */}
      <Modal visible={isEditing} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.editLabel}>Edit Profile</Text>

            <View style={{marginBottom: 20}}>
              <SelectDropdown
                data={allDepartments}
                defaultButtonText={user.department}
                onSelect={(selectedItem, index) => {
                  setDepartment(selectedItem)
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
              />
            </View>

            {/* <Input
              placeholder="Department"
              value={user.department}
              onChangeText={(text) => setDepartment(text)}
              style={styles.input}
            /> */}
            {/* <Input
              placeholder="Role"
              value={user.role[0]}
              onChangeText={(text) => setRole(text)}
              style={styles.input}
            /> */}

            <View style={{marginBottom: 20}}>
              <SelectDropdown
                data={allRoles}
                defaultButtonText={user.role[0]}
                onSelect={(selectedItem, index) => {
                  setRole(selectedItem)
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                style = {{marginBottom: 10}}
              />
            </View>

            <Input
              placeholder="Contact"
              value={contact}
              onChangeText={(text) => setContact(text)}
              style={styles.input}
            />
            <Button title="Save" onPress={saveProfile} buttonStyle={styles.saveButton}/>
            <Button
              title="Cancel"
              onPress={() => setIsEditing(false)}
              buttonStyle={styles.cancelButton}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  // Existing styles...

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    padding: 10,
    width: 50,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    resizeMode: "contain",
    marginRight: 20,
  },
  container: {
    paddingHorizontal: 20,
    borderColor: colors.grey3,
  },
  info: {
    fontSize: 18,
  },
  editLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  imagecontainer: {
    flexDirection: "row",
    paddingVertical: 10,
    marginBottom: 10,
    // justifyContent: 'space-between',
  },

  textContainer: {
    flexDirection: "column",
    paddingVertical: 10,
  },
  cancelButton: {
    marginTop: 10,
    backgroundColor: "gray",
    width: 100,
  },
  saveButton: {
    width: 100,
  }
});
