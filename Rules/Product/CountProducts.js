export default function ProductCount(sectionProxy) {

	return sectionProxy.count('/RobSampleApp1/Services/SampleServiceV2.service', 'Products', "").then((count) => {
		sectionProxy.getPageProxy().getClientData().EquipmentTotalCount = count
	});

}