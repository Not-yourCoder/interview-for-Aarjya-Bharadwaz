import { images } from "@/constants/images";
import type { LaunchResponse } from "@/types/launches";

type Props = {
    launch: LaunchResponse;
};

const LinkIcons = ({ launch }: Props) => {
    const iconsConfig = [
        { key: "webcast", value: launch.links.webcast, icon: <img src={images.youtube} className="w-5 h-5" /> },
        { key: "wikipedia", value: launch.links.wikipedia, icon: <img src={images.wikipedia} className="w-4 h-4" /> },
        { key: "article", value: launch.links.article, icon: <img src={images.article} className="w-4 h-4" /> },
        { key: "redditCampaign", value: launch.links.reddit?.campaign, icon: <img src={images.reddit} className="w-4 h-4" /> },
        { key: "flickr", value: launch.links.flickr?.original[0], icon: <img src={images.flickr} className="w-4 h-4" /> },
    ];

    return (
        <div className="py-2 flex space-x-2 text-gray-400">
            {iconsConfig.map(({ key, value, icon }) =>
                value ? (
                    <a key={key} href={value} target="_blank" rel="noopener noreferrer">
                        {icon}
                    </a>
                ) : null
            )}
        </div>
    );
};

export default LinkIcons;
