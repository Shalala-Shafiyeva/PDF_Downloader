import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

function DocTemplate() {
  const styles = StyleSheet.create({
    page: {
      width: "70%",
      padding: 20,
      fontFamily: "Helvetica",
    },
    title: {
      fontSize: 14,
      marginBottom: 10,
      textAlign: "center",
    },
    // section: {
    //   margin: 10,
    //   padding: 10,
    //   fontSize: 14,
    //   lineHeight: 1.5,
    // },
    head: {
      fontSize: 16,
      display: "flex",
      alignItems: "flex-end",
      flexDirection: "column",
      marginBottom: 10,
      fontWeight: "bold",
    },
    content: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
    description: {
      textAlign: "justify",
    },
    footer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10,
    },
    author: {
      fontStyle: "italic",
    },
    date: {
      fontStyle: "italic",
    },
  });
  return (
    <div
      className="App"
      style={{ display: "flex", justifyContent: "center", width: "100%" }}
    >
      <Document style={{ width: "70%" }}>
        <Page size="A4" style={styles.page}>
          <Text style={styles.head}>
            <p>"Azad Azərbaycan" MTRK-nın</p>
            <p>Prezidenti Azər Hemidov</p>
            <p>IT şöbəsinin müdiri</p>
            <p>Vüsal Mustafayev tərəfindən</p>
          </Text>
          <View style={styles.section}>
            <Text style={styles.content}>
              <span style={styles.title}>Teqdimat</span>
              <p style={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                necessitatibus, quo atque eius ab nobis reiciendis aperiam
                aspernatur fugiat accusantium officia harum distinctio dicta
                quam id commodi expedita cum consequuntur quae natus. Nulla
                delectus quas accusamus perferendis inventore voluptates non
                enim pariatur officiis libero provident ducimus eligendi, hic ad
                quasi.
              </p>
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.footer}>
              <span>Vusal Mustafayev</span>
              <span>06.12.2024</span>
            </Text>
          </View>
        </Page>
      </Document>
      <PDFDownloadLink
        document={<Document />}
        fileName="MyDocument.pdf"
        style={{ display: "none" }}
      >
        {/* {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        } */}
        Download
      </PDFDownloadLink>
    </div>
  );
}

export default DocTemplate;
