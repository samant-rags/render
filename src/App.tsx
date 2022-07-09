import { PanelData } from "@grafana/data";
import { Component } from "react";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";
import { FetchNews } from "./components/FetchNews";

interface State {
  data: PanelData;
}

export class App extends Component<unknown, State> {
  constructor(props: unknown) {
    super(props);

    this.onPanelUpdate = this.onPanelUpdate.bind(this);
  }

  componentDidMount() {
    htmlNode.addEventListener("panelupdate", this.onPanelUpdate);
  }

  componentWillUnmount() {
    htmlNode.removeEventListener("panelupdate", this.onPanelUpdate);
  }

  onPanelUpdate() {
    this.setState({ data: data });
  }

  render() {
    const value = data.series[0]?.fields[1]?.state?.calcs?.last;
    return (
      <div>
        Value: {value ?? "No data"}
        <FetchNews />
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}
