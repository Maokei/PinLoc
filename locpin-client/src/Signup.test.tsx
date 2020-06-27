import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Signup from "./components/Signup";
import SignupForm from "./components/SignupForm";

Enzyme.configure({ adapter: new Adapter() });

describe("<Signup />", () => {
    const wrapper = shallow(<Signup />);
    // console.log(wrapper.debug());

    it("Signup matches snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("signup page has a title component", () => {
        const title = wrapper.find("h2").at(1);
        expect(title).toBeTruthy();
    });

    it("Form can be found in Signup", () => {
        const form = wrapper.find("form").at(2);
        expect(form).toBeTruthy();
    });
});

describe("SignupForm", () => {
    let wrapper: Enzyme.ReactWrapper<
        any,
        Readonly<{}>,
        React.Component<{}, {}, any>
    >;
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation((init: any) => {
        return [init, setState];
    });

    beforeEach(() => {
        wrapper = mount(shallow(<SignupForm />).get(0));
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    const formWrapper = mount(<SignupForm />);
    const form = formWrapper.find("form").at(0);
    // console.log(form.debug());
});
