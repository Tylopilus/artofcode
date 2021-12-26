import Button from '~/components/Button';
import { Dropdown } from '~/components/Dropdown';

export function Filter() {
  return (
    <div className="border rounded-full py-2 px-16 max-w-4xl mx-auto flex items-center mt-16 justify-between">
      <div>
        <Dropdown className="bg-gray-800 px-8 mr-4 border rounded-full py-2 appearance-none">
          <option>Javascript</option>
          <option>Java</option>
          <option>CSS</option>
        </Dropdown>
      </div>
      <div className="flex gap-4">
        <Button active={true}>popular</Button>
        <Button>recent</Button>
      </div>
    </div>
  );
}
