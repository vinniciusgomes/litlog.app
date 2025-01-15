import { Button } from "@workspace/ui/components/button";
import { DialogContent, DialogHeader } from "@workspace/ui/components/dialog";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Textarea } from "@workspace/ui/components/textarea";

export const CreateShelfDialog = () => {
  return (
    <DialogContent className="p-8 sm:p-12 w-[95%] sm:min-w-[720px]">
      <DialogHeader className="mb-1 items-start">
        <h2 className="text-2xl heading">Create a shelf</h2>
      </DialogHeader>
      <div>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Give it a name" className="h-12" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description (optional)</Label>
            <Textarea id="description" name="description" placeholder="Add a description" rows={4} />
          </div>

          <Button type="submit" className="h-12">Create shelf</Button>
        </form>
      </div>
    </DialogContent>
  );
};
