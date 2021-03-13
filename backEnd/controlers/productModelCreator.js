const CPUMdl      = require('../database/models/product').CPUMdl
const GPUMdl      = require('../database/models/product').GPUMdl
const mbMDL       = require('../database/models/product').mbMdl
const caseMdl     = require('../database/models/product').caseMdl
const RAMmdl      = require('../database/models/product').RAMmdl
const pbMdl       = require('../database/models/product').pbMdl
const storageMdl  = require('../database/models/product').storageMdl

/**
 * Creates a new CPU to be store in the DB
 * @param {object} cpuData JSON Object for the CPU model   
 */
function createCpu(cpuData){
    return new CPUMdl({
        socket:             cpuData.CPU_SockType,
        power:              cpuData.CPU_Pow,
        numOfCores:         cpuData.CPU_Cores,
        numOfThreads:       cpuData.CPU_Threads,
        hasIntegratedGraph: cpuData.CPU_hasIGraph,
        igraphName:         cpuData.CPU_IGraphName
        })
}

/**
 * Creates a new GPU to be store in the DB
 * @param {object} cpuData JSON Object for the GPU model   
 */
function createGpu(gpuData){
     return new GPUMdl({
        manufacturer: gpuData.GPU_manufacturer,
        series:       gpuData.GPU_series,
        interface:    gpuData.GPU_interface,
        ports:        gpuData.GPU_ports,
        memType:      gpuData.GPU_memType,
        memSize:      gpuData.GPU_memSize,
        dxSupVer:     gpuData.GPU_dxSupVer,
        technologies: gpuData.GPU_technology
    })
}

/**
 * Creates a new Motherboard to be store in the DB
 * @param {object} motherboardData JSON Object for the motherboard model   
 */
function createMotherBoard(motherboardData){
     return new mbMDL({
        type:         motherboardData.MB_type,
        socket:       motherboardData.MB_socket,
        ports:        motherboardData.MB_ports,
        audioOutType: motherboardData.MB_audioOutType,
        pciSlots:     motherboardData.MB_pciSlots,
        pci3Slots:    motherboardData.MB_pci3slots,
        memType:      motherboardData.MB_memType,
        maxMem:       motherboardData.MB_maxMem,
        memSlots:     motherboardData.memSlots
    })
}

/**
 * Creates a new PC Case to be store in the DB
 * @param {object} pcCaseData JSON Object for the PC Case model   
 */
function createPcCase(pcCaseData){
     return new caseMdl({
        type:               pcCaseData.C_type,
        mbCompatibility:    pcCaseData.C_mbCompatibility,
        dimensions:         pcCaseData.C_dimensions,
        mass:               pcCaseData.C_mass,
        expansionSlots:     pcCaseData.C_expansionSlots,
        externalConnectors: pcCaseData.C_externalConnectors,
        illumination:       pcCaseData.C_illumination,
        includedFans:       pcCaseData.C_includedFans,
        optionalFanSlots:   pcCaseData.C_optionalFanSlots
        })
}

/**
 * Creates a new RAM to be store in the DB
 * @param {object} ramData JSON Object for the RAM model   
 */
function createRam(ramData){
     return new RAMmdl({
        model:      ramData.RAM_model,
        type:       ramData.RAM_type,
        capacity:   ramData.RAM_capacity,
        radiator:   ramData.RAM_radiator,
        frequency:  ramData.RAM_frequency
        })
}

/**
 * Creates a new Power Brick to be store in the DB
 * @param {object} powerBrickData JSON Object for the power brick model   
 */
function createPowerBrick(powerBrickData){
     return new pbMdl({
        manufacturer: powerBrickData.PB_manufacturer,
        conType:      powerBrickData.PB_conType,
        voltage:      powerBrickData.PB_voltage,
        power:        powerBrickData.PB_power
        })
}

/**
 * Creates a new Storage Unit to be store in the DB
 * @param {object} storageData JSON Object for the storage model   
 */
function createStorage(storageData){
     return new storageMdl({
        capacity:     req.body.S_capacity,
        type:         req.body.S_type,
        rpm:          req.body.S_RPM,
        readSpeed:    req.body.S_readSpd,
        writeSpeed:   req.body.S_writeSpd,
        interface:    req.body.S_interface,
        Series:       req.body.S_series
        })
}

module.exports = {
    'cpu' : createCpu,
    'gpu' : createGpu,
    'motherboard' : createMotherBoard,
    'pcCase' : createPcCase,
    'ram' : createRam,
    'powerBrick': createPowerBrick,
    'storage' : createStorage
}
