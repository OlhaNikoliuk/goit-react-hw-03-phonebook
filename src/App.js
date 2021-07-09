import React, { Component } from "react";
import toast, { Toaster } from "react-hot-toast";
import { HiUsers } from "react-icons/hi";
import { FaAddressBook } from "react-icons/fa";

import Container from "./components/Container/Container";
import Section from "./components/Section/Section";
//import ContactForm from "./components/ContactForm/ContactForm";
import FormikContactForm from "../src/components/FormikContactForm/FormikContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

// [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ]

// const notify = () => toast('Here is your toast.');

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    // 2. (Вызывается 1 раз после монтирования) Записываем в стейт данные из localStorage
    const contacts = localStorage.getItem("contacts");
    const setedContacts = JSON.parse(contacts);

    // записываем данные в стейт только, если в localStorage что то есть
    if (setedContacts) {
      this.setState({ contacts: setedContacts });
    }
  }
  componentDidUpdate(prevState) {
    // 1. (Вызывается каждый раз, когда происх ихмененияе в компоненте) Проверяем обновился ли стейт и если ДА, то записываем данные в localStorage
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = (newContact) => {
    const findName = this.state.contacts.find(
      (contact) => contact.name === newContact.name
    );

    if (!findName) {
      this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }));
      toast.success(`Contact ${newContact.name} added to Phonebook`, {
        duration: 4000,
        position: "top-right",
      });
    } else {
      toast.error(`${newContact.name} is already in contacts.`, {
        duration: 4000,
        position: "top-right",
      });
    }
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  onInputSearch = () => {
    const { filter, contacts } = this.state;
    const searchName = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchName)
    );
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => {
        return contact.id !== contactId;
      }),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.onInputSearch();
    return (
      <Container>
        <Toaster />
        <Section title={"Phonebook"}>
          <FaAddressBook size="24" />
          <FormikContactForm onSubmit={this.addContact} />
        </Section>
        {/* <ContactForm onSubmit={this.addContact}></ContactForm> */}
        <Section title={"Contacts"}>
          <HiUsers size="26" />
          <Filter onChange={this.changeFilter} value={filter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          ></ContactList>
        </Section>
      </Container>
    );
  }
}

export default App;
