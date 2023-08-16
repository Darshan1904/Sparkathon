// Initialization for ES Users
import {
    Collapse,
    initTE,
} from "tw-elements";

initTE({ Collapse });
const Accordion = () => {
    return (
        <div id="accordionExample">
            <div
                class="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 class="mb-0" id="headingOne">
                    <button
                        class="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                        type="button"
                        data-te-collapse-init
                        data-te-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne">
                        <span>
                        </span>
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    class="!visible"
                    data-te-collapse-item
                    data-te-collapse-show
                    aria-labelledby="headingOne"
                    data-te-parent="#accordionExample">
                    <div class="px-5 py-4">
                
                    </div>
                </div>
            </div>

        </div>)
}
export default Accordion