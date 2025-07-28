import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "../../ui/badge";
import { formatDateTime, getLaunchStatusVariant } from "@/utils/helpers";
import { useEffect, useState } from "react";
import { getLaunchPadsById, getPayloadsById, getRocketsById } from "@/api/api";
import type { Rocket } from "@/types/rockets";
import type { Launchpad } from "@/types/launchpads";
import LaunchDetailsRow from "./DetailsRow";
import type { Payload } from "@/types/payloads";
import LaunchDetailsSkeleton from "@/components/Skeleton/LaunchDetailsSkeleton";
import { useLaunchePads } from "@/hooks/useLaunchPads";
import type { LaunchResponse } from "@/types/launches";
import LinkIcons from "@/components/LinkIcons/LinkIcons";

const rocketCache = new Map()
const launchpadCache = new Map()
const payloadCache = new Map()

type Props = {
    open: boolean
    launch: LaunchResponse | null
    onClose: () => void
}

export default function LaunchDetailsDialog({ open, launch, onClose }: Props) {
    const [rocket, setRocket] = useState<Rocket | null>(null);
    const [launchPad, setLaunchPad] = useState<Launchpad | null>(null)
    const [payload, setPayload] = useState<Payload | null>(null)
    const { isLoading: launchDetailsLoading } = useLaunchePads()


    useEffect(() => {
        if (!launch) return;

        const { rocket: rocketId, launchpad: launchpadId, payloads } = launch;

        const fetchRocket = async () => {
            if (rocketCache.has(rocketId)) {
                setRocket(rocketCache.get(rocketId));
            } else {
                const result = await getRocketsById(rocketId);
                rocketCache.set(rocketId, result);
                setRocket(result);
            }
        };

        const fetchLaunchpad = async () => {
            if (launchpadCache.has(launchpadId)) {
                setLaunchPad(launchpadCache.get(launchpadId));
            } else {
                const result = await getLaunchPadsById(launchpadId);
                launchpadCache.set(launchpadId, result);
                setLaunchPad(result);
            }
        };

        const fetchPayload = async () => {
            const payloadId = payloads?.[0];
            if (!payloadId) {
                setPayload(null);
                return;
            }

            if (payloadCache.has(payloadId)) {
                setPayload(payloadCache.get(payloadId));
            } else {
                const result = await getPayloadsById(payloadId);
                payloadCache.set(payloadId, result);
                setPayload(result);
            }
        };

        fetchRocket();
        fetchLaunchpad();
        fetchPayload();
    }, [launch]);


    if (!launch) return null;
    if (!launch) return null;

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogTitle></DialogTitle>
            <DialogContent className="bg-white p-4 w-md max-w-md" >
                {launchDetailsLoading ?
                    <LaunchDetailsSkeleton /> :
                    <>
                        <div className="flex items-center justify-between p-4 border-b">
                            <div className="flex items-center space-x-3">
                                <img
                                    src={launch.links?.patch?.small || launch.links?.patch?.large || "https://placehold.co/60x60" + launch.name}
                                    alt={`${launch.name} Mission Patch`}
                                    className="w-20 h-20 rounded-lg"
                                />
                                <div>
                                    <div className="flex items-center space-x-2">
                                        <h2 className="text-lg font-semibold text-gray-900">{launch.name}</h2>
                                        <Badge
                                            variant={getLaunchStatusVariant(launch)}
                                            className="text-xs px-2 py-1 font-medium"
                                        >
                                            {getLaunchStatusVariant(launch).charAt(0).toUpperCase() + getLaunchStatusVariant(launch).slice(1)}
                                        </Badge>
                                    </div>
                                    <p className="text-sm text-gray-600">{rocket?.name}</p>
                                    <LinkIcons launch={launch} />
                                </div>
                            </div>
                        </div>

                        {launch.details && (
                            <div className="px-4 py-3 border-b">
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    {launch.details}
                                    {launch.links?.wikipedia && (
                                        <a
                                            href={launch.links.wikipedia}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 ml-1"
                                        >
                                            Wikipedia
                                        </a>
                                    )}
                                </p>
                            </div>
                        )}

                        <div className="p-4">
                            <LaunchDetailsRow label="Flight Number" value={launch.flight_number} />
                            <LaunchDetailsRow label="Rocket Type" value={rocket?.type} />
                            <LaunchDetailsRow label="Rocket Name" value={rocket?.name} />
                            <LaunchDetailsRow label="Manufacturer" value={rocket?.company} />
                            <LaunchDetailsRow label="Country" value={rocket?.country} />
                            <LaunchDetailsRow label="Launch Date" value={formatDateTime(launch.date_utc)} />
                            <LaunchDetailsRow label="Launch Site" value={launchPad?.name} />
                            {launch.payloads?.length > 0 && (
                                <LaunchDetailsRow label="Payload" value={payload?.name} />
                            )}
                            {launch.payloads?.length > 0 && (
                                <LaunchDetailsRow label="Payload Type" value={payload?.type} />
                            )}
                            {launch.payloads?.length > 0 && (
                                <LaunchDetailsRow label="Orbit" value={payload?.orbit} />
                            )}
                        </div>
                    </>
                }
            </DialogContent>
        </Dialog >
    );
}

