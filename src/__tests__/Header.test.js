import {create} from "react-test-renderer";
import Header from "../components/Header";
// Test class -> contains your tests
describe("snapshot testing", () => {
    // Test method -> runs the test
    it("should match the snapshot", function() {
        const header = create(<Header/>);
        expect(header.toJSON()).toMatchSnapshot();
    });
});