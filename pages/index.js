import DialogBox from "../components/common/DialogBox";
import DropdownMenu from "../components/common/DropdownMenu";
import Button from "../components/common/Button";
import Select from "../components/common/Select";
import ToggleSwitch from "../components/common/ToggleSwitch";
import Accordion from "../components/common/Accordion";
import Radios from "../components/common/Radios";
import DialogPopover from "../components/common/DialogPopover";

export default function Home() {
  return (
    <div className="container mx-auto mt-3">
      <div className="flex flex-wrap items-center gap-2">
        <DialogBox
          triggerElement={<Button role="button">Dialog Box</Button>}
          content={<DialogBoxContent />}
          confirmFunction={() => window.alert("confirmed.")}
        />
        <div className="inline-block">
          <DropdownMenu
            buttonLabel="Dropdown"
            items={[
              { title: "Delete", href: "/" },
              { title: "Plant", href: "/poo" },
              { title: "Fly", href: "/enter" },
            ]}
          />
        </div>
        <DialogPopover
          triggerElement={<Button role="button">Dialog Popover</Button>}
          panelContent={<AccordionElement />}
        />
        <Select
          options={[
            { name: "Wade Cooper" },
            { name: "Arlene Mccoy" },
            { name: "Devon Webb" },
            { name: "Tom Cook" },
            { name: "Tanya Fox" },
            { name: "Hellen Schmidt" },
          ]}
        />
      </div>
      <div className="py-3">
        <ToggleSwitch
          label="Toggle Switch"
          description="A switch that toggles"
        />
      </div>
      <div className="flex items-stretch gap-3">
        <Radios
          className="min-w-max flex-grow"
          optionList={[
            {
              value: "abacus",
              title: "Abacus",
              description: "123 Abacus Avenue",
            },
            {
              value: "googoo",
              title: "Donkey",
              description: "123 Donkey Avenue",
            },
          ]}
        ></Radios>
      </div>
    </div>
  );
}

const DialogBoxContent = () => {
  return (
    <>
      <p>
        Are you sure you would like to do this? Here are some reasons why you
        probably shouldn&apos;t:
      </p>
      <AccordionElement />
    </>
  );
};

const AccordionElement = () => {
  return (
    <Accordion
      className="w-full"
      color="yellow"
      items={[
        {
          title: "First Accordion Item",
          description:
            "Lando Norris is a British-Belgian racing driver currently competing in Formula One with McLaren, racing under the British flag.",
        },
        {
          title: "Second Accordion Item",
          description:
            "He won the MSA Formula championship in 2015, and the Toyota Racing Series, Eurocup Formula Renault 2.0 and Formula Renault 2.0 Northern European Cup in 2016.",
        },
      ]}
    />
  );
};
